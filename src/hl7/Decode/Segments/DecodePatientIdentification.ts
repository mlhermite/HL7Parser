import { HL7Settings } from '../../utils/HL7Settings.ts';
import { arrayWithContext, float, listComponent, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { PatientIdentification } from '../../Types/Segments/PatientIdentification.ts';
import { number, string } from 'typescript-json-decoder';
import { decodeCodedWithExceptions } from '../DataTypes/DecodeCodedWithExceptions.ts';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { decodeHierarchicDesignator } from '../DataTypes/DecodeHierarchicDesignator.ts';
import { decodeExtendedCommunicationNumber } from '../DataTypes/DecodeExtendedCommunicationNumber.ts';
import { decodeExtendedCompositeIdWithCheckDigit } from '../DataTypes/DecodeExtendedCompositeIdWithCheckDigit.ts';
import { decodeExtendedPersonName } from '../DataTypes/DecodeExtendedPersonName.ts';
import { decodeExtendedAddress } from '../DataTypes/DecodeExtendedAddress.ts';
import { decodeYesNoIndicator } from '../Tables/DecodeYesNoIndicator.ts';

export const decodePatientIdentification = (settings: HL7Settings) =>
  arrayWithContext(
    'PatientIdentification (PID)',
    'segment',
    settings,
    (data): PatientIdentification => ({
      setId: optComponent('PID.1', 0, float, data[1]),
      patientId: optComponent('PID.2', 0, string, data[2]),
      patientIdentifierList: listComponent(
        'PID.3',
        decodeExtendedCompositeIdWithCheckDigit('component', settings),
        'infinite',
        false,
        data[3],
        settings,
      ),
      alternatePatientId: optComponent('PID.4', 0, string, data[4]),
      patientName: listComponent('PID.5', decodeExtendedPersonName('component', settings), 'infinite', false, data[5], settings),
      mothersMaidenName: listComponent('PID.6', decodeExtendedPersonName('component', settings), 'infinite', false, data[6], settings),
      datetimeOfBirth: optComponent('PID.7', 0, decodeDatetime, data[7]),
      administrativeSex: optComponent('PID.8', 0, decodeCodedWithExceptions('component', settings), data[8]),
      patientAlias: optComponent('PID.9', 0, string, data[9]),
      race: listComponent('PID.10', decodeCodedWithExceptions('component', settings), 'infinite', false, data[10], settings),
      patientAddress: listComponent('PID.11', decodeExtendedAddress('component', settings), 'infinite', false, data[11], settings),
      countyCode: optComponent('PID.12', 0, string, data[12]),
      phoneNumberHome: listComponent('PID.13', decodeExtendedCommunicationNumber('component', settings), 'infinite', false, data[13], settings),
      phoneNumberBusiness: listComponent('PID.14', decodeExtendedCommunicationNumber('component', settings), 'infinite', false, data[14], settings),
      primaryLanguage: optComponent('PID.15', 0, decodeCodedWithExceptions('component', settings), data[15]),
      maritalStatus: optComponent('PID.16', 0, decodeCodedWithExceptions('component', settings), data[16]),
      religion: optComponent('PID.17', 0, decodeCodedWithExceptions('component', settings), data[17]),
      patientAccountNumber: optComponent('PID.18', 0, decodeExtendedCompositeIdWithCheckDigit('component', settings), data[18]),
      ssnNumber: optComponent('PID.19', 0, string, data[19]),
      driversLicenseNumber: optComponent('PID.20', 0, string, data[20]),
      mothersIdentifier: listComponent(
        'PID.21',
        decodeExtendedCompositeIdWithCheckDigit('component', settings),
        'infinite',
        false,
        data[21],
        settings,
      ),
      ethnicGroup: listComponent('PID.22', decodeCodedWithExceptions('component', settings), 'infinite', false, data[22], settings),
      birthPlace: optComponent('PID.23', 0, string, data[23]),
      multipleBirthIndicator: optComponent('PID.24', 0, decodeYesNoIndicator, data[24]),
      birthOrder: optComponent('PID.25', 0, float, data[25]),
      citizenship: listComponent('PID.26', decodeCodedWithExceptions('component', settings), 'infinite', false, data[26], settings),
      veteransMilitaryStatus: optComponent('PID.27', 0, decodeCodedWithExceptions('component', settings), data[27]),
      nationality: optComponent('PID.28', 0, string, data[28]),
      patientDeathDateAndTime: optComponent('PID.29', 0, decodeDatetime, data[29]),
      patientDeathIndicator: optComponent('PID.30', 0, decodeYesNoIndicator, data[30]),
      identityUnknownIndicator: optComponent('PID.31', 0, decodeYesNoIndicator, data[31]),
      identityReliabilityCode: listComponent('PID.32', decodeCodedWithExceptions('component', settings), 'infinite', false, data[32], settings),
      lastUpdate: optComponent('PID.33', 0, decodeDatetime, data[33]),
      lastUpdateFacility: optComponent('PID.34', 0, decodeHierarchicDesignator('component', settings), data[34]),
      taxonomicClassificationCode: optComponent('PID.35', 0, decodeCodedWithExceptions('component', settings), data[35]),
      breedCode: optComponent('PID.36', 0, decodeCodedWithExceptions('component', settings), data[36]),
      strain: optComponent('PID.37', 0, string, data[37]),
      productionClassCode: listComponent('PID.38', decodeCodedWithExceptions('component', settings), 'infinite', false, data[38], settings),
      tribalCitizenship: listComponent('PID.39', decodeCodedWithExceptions('component', settings), 'infinite', false, data[39], settings),
      patientTelecommunicationInformation: listComponent(
        'PID.40',
        decodeExtendedCommunicationNumber('component', settings),
        'infinite',
        false,
        data[40],
        settings,
      ),
    }),
  );
