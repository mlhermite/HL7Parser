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
    let result = 0;
    /*
        A01 Admit/Visit Notification => create patient
        A05 Pre-admit a patient => create patient
        A28 Create New Patient => create patient
        A31 Update person information => update patient
        A47 Change Patient Identifier List => delete patient
     */
    if (event in { A01: undefined, A05: undefined, A28: undefined, A31: undefined }) {
        result = await create_or_update_patient(request as ADTCreationRequest, sqlClient);
        console.log('Updated / created: ', result);
    } else if (event in { A47: undefined }) {
        result = await delete_patient(request as ADTDeleteRequest, sqlClient);
        console.log('Deleted: ', result);
    }
    return result;
};

const create_or_update_patient = async (request: ADTCreationRequest, sqlClient: Client) => {
    const userValid = request.PID.identityReliabilityCode.reduce((acc, item) => item.identifier === 'VALI' || acc, false);
    const ins = request.PID.patientIdentifierList.find(item => item.identifierTypeCode.startsWith('INS'))?.idNumber;
    const oid = request.PID.patientIdentifierList.find(item => item.identifierTypeCode.startsWith('PI'))?.idNumber;

    if (!userValid || !ins || !oid) {
        return 0;
    }

    const birthName = findPatientBirthName(request.PID.patientName) ?? null;
    const displayName = findPatientName(request.PID.patientName) ?? null;
    const birth_lastname = birthName?.familyName.surname ?? null;
    const used_lastname = displayName?.familyName.surname ?? null;
    const birth_firstnames = birthName?.secondAndFurtherNames ?? null;
    const first_firstname = birthName?.givenName ?? null;
    const used_firstname = displayName?.givenName ?? null;
    const birth_date =
        (request.PID.datetimeOfBirth ? dateTimeFromFormats(request.PID.datetimeOfBirth, AcceptedDateTimeFormats)?.toSQLDate() : undefined) ?? null;
    const sex = request.PID.administrativeSex?.identifier ?? null;
    const birth_code = findPatientBirthPlace(request.PID.patientAddress)?.countyCode?.identifier ?? null;
    try {
        const result = await sqlClient.query(`INSERT INTO patients VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, [
            ins,
            oid,
            birth_lastname,
            used_lastname,
            birth_firstnames,
            first_firstname,
            used_firstname,
            birth_date,
            sex,
            birth_code,
        ]);
        return result.rowCount;
    } catch (_) {
        const result = await sqlClient.query(
            `UPDATE patients SET 
                              birth_lastname=$3,
                              used_lastname=$4,
                              birth_firstname=$5,
                              first_firstname=$6,
                              used_firstname=$7,
                              birth_date=$8,
                              sex=$9,
                              birth_code=$10
                         WHERE
                              oid=$2 AND ins=$1
        `,
            [ins, oid, birth_lastname, used_lastname, birth_firstnames, first_firstname, used_firstname, birth_date, sex, birth_code],
        );
        return result.rowCount;
    }
};

const delete_patient = async (request: ADTDeleteRequest, sqlClient: Client) => {
    const insToDelete = request.MRG.priorPatientIdentifierList.find(item => item.identifierTypeCode.startsWith('INS'))?.idNumber;
    if (insToDelete) {
        await sqlClient.query(`DELETE FROM patients WHERE ins=$1`, [insToDelete]);
        return 1;
    }
    return 0;
};

const findPatientBirthName = (names: ExtendedPersonName[] | undefined): ExtendedPersonName | undefined => {
    return names?.find(name => name.nameTypeCode === 'L');
};

const findPatientName = (names: ExtendedPersonName[] | undefined): ExtendedPersonName | undefined => {
    return names?.find(name => name.nameTypeCode === 'D') ?? findPatientBirthName(names);
};

const findPatientBirthPlace = (addresses: ExtendedAddress[] | undefined): ExtendedAddress | undefined => {
    return addresses?.find(address => address.addressType === 'BDL');
};

const toSqlString = (value: string | null): string => (value !== null ? `'${value}'` : 'null');
