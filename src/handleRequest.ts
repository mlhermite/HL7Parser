import { ADTRequest, HL7Request } from './hl7/Types/Request.ts';
import { Client } from 'pg';
import { AcceptedDateTimeFormats, dateTimeFromFormats } from './hl7/utils/DatetimeUtils.ts';
import { ExtendedPersonName } from './hl7/Types/DataTypes/ExtendedPersonName.ts';
import { DateTime } from 'luxon';
import { Datetime } from './hl7/Types/Tables/Datetime.ts';

export const handleRequest = (request: HL7Request, sqlClient: Client) => {
  switch (request.MSH.messageType.messageCode) {
    case 'ADT':
      return handleADTRequest(request, sqlClient);
    default:
      throw new Error('Not implemented');
  }
};

export const handleADTRequest = async (request: ADTRequest, sqlClient: Client) => {
  const event = request.MSH.messageType.triggerEvent;
  /*
  A01 Admit/Visit Notification => create patient
  A05 Pre-admit a patient => create patient
   */
  console.log('event', event);
  if (event === 'A01' || event === 'A05') {
    const userValid = request.PID.identityReliabilityCode.reduce((acc, item) => item.identifier === 'VALI' || acc, false);
    console.log('userValid', userValid);
    const ins = request.PID.patientIdentifierList.find(item => item.identifierTypeCode.startsWith('INS'))?.idNumber;
    const oid = request.PID.patientIdentifierList.find(item => item.identifierTypeCode.startsWith('PI'))?.idNumber;

    if (!userValid || !ins || !oid) {
      return 0;
    }

    const birthName = find_patient_birth_name(request.PID.patientName);
    const displayName = find_patient_name(request.PID.patientName);
    const birth_lastname = birthName?.familyName;
    const used_lastname = displayName?.familyName;
    const birth_firstnames = birthName?.secondAndFurtherNames;
    const first_firstname = birthName?.givenName;
    const used_firstname = displayName?.givenName;
    const birth_date = dateTimeFromFormats(request.PID.datetimeOfBirth as string, AcceptedDateTimeFormats)?.toSQLDate();
    const sex = request.PID.administrativeSex?.identifier;
    const birth_code = request.PID.birthPlace;
    await sqlClient.query(
      `INSERT INTO patients VALUES (
                             '${ins}',
                             '${oid}',
                             '${birth_lastname}', 
                             '${used_lastname}', 
                             '${birth_firstnames}',
                             '${first_firstname}',
                             '${used_firstname}',
                             '${birth_date}',
                             '${sex}',
                             '${birth_code}'
                        );`,
    );
  }
};

const find_patient_birth_name = (names: ExtendedPersonName[] | undefined): ExtendedPersonName | undefined => {
  return names?.find(name => name.nameTypeCode === 'L');
};

const find_patient_name = (names: ExtendedPersonName[] | undefined): ExtendedPersonName | undefined => {
  return names?.find(name => name.nameTypeCode === 'D') ?? find_patient_birth_name(names);
};
