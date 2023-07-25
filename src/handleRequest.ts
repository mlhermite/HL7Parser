import { ADTCreationRequest, ADTDeleteRequest, ADTRequest, HL7Request } from './hl7/Types/Request.ts';
import { Client } from 'pg';
import { AcceptedDateTimeFormats, dateTimeFromFormats } from './hl7/utils/DatetimeUtils.ts';
import { ExtendedPersonName } from './hl7/Types/DataTypes/ExtendedPersonName.ts';
import { ExtendedAddress } from './hl7/Types/DataTypes/ExtendedAddress.ts';

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
  A28 Create New Patient => create patient
  A31 Update person information => update patient
  A47 Change Patient Identifier List => delete patient
   */
    if (event in { A01: undefined, A05: undefined, A28: undefined, A31: undefined }) {
        return create_or_update_patient(request as ADTCreationRequest, sqlClient);
    } else if (event in { A47: undefined }) {
        return delete_patient(request as ADTDeleteRequest, sqlClient);
    }
};

const create_or_update_patient = async (request: ADTCreationRequest, sqlClient: Client) => {
    const userValid = request.PID.identityReliabilityCode.reduce((acc, item) => item.identifier === 'VALI' || acc, false);
    const ins = request.PID.patientIdentifierList.find(item => item.identifierTypeCode.startsWith('INS'))?.idNumber;
    const oid = request.PID.patientIdentifierList.find(item => item.identifierTypeCode.startsWith('PI'))?.idNumber;

    if (!userValid || !ins || !oid) {
        return 0;
    }

    const birthName = find_patient_birth_name(request.PID.patientName);
    const displayName = find_patient_name(request.PID.patientName);
    const birth_lastname = birthName?.familyName.surname;
    const used_lastname = displayName?.familyName.surname;
    const birth_firstnames = birthName?.secondAndFurtherNames;
    const first_firstname = birthName?.givenName;
    const used_firstname = displayName?.givenName;
    const birth_date = dateTimeFromFormats(request.PID.datetimeOfBirth as string, AcceptedDateTimeFormats)?.toSQLDate();
    const sex = request.PID.administrativeSex?.identifier;
    const birth_code = find_patient_birth_place(request.PID.patientAddress)?.countyCode?.identifier;
    try {
        const result = await sqlClient.query(
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
        return result.rowCount;
    } catch (_) {
        console.log('update');
        const result = await sqlClient.query(
            `UPDATE patients SET 
                              birth_lastname='${birth_lastname}',
                              used_lastname='${used_lastname}',
                              birth_firstname='${birth_firstnames}',
                              first_firstname='${first_firstname}',
                              used_firstname='${used_firstname}',
                              birth_date='${birth_date}',
                              sex='${sex}',
                              birth_code='${birth_code}'
                         WHERE
                              oid='${oid}' AND ins='${ins}'
        `,
        );
        return result.rowCount;
    }
};

const delete_patient = async (request: ADTDeleteRequest, sqlClient: Client) => {
    const insToDelete = request.MRG.priorPatientIdentifierList.find(item => item.identifierTypeCode.startsWith('INS'))?.idNumber;
    if (insToDelete) {
        await sqlClient.query(`DELETE FROM patients WHERE ins='${insToDelete}'`);
        return 1;
    }
    return 0;
};

const find_patient_birth_name = (names: ExtendedPersonName[] | undefined): ExtendedPersonName | undefined => {
    return names?.find(name => name.nameTypeCode === 'L');
};

const find_patient_name = (names: ExtendedPersonName[] | undefined): ExtendedPersonName | undefined => {
    return names?.find(name => name.nameTypeCode === 'D') ?? find_patient_birth_name(names);
};

const find_patient_birth_place = (addresses: ExtendedAddress[] | undefined): ExtendedAddress | undefined => {
    return addresses?.find(address => address.addressType === 'BDL');
};
