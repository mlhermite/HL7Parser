import { getNextHL7Type, HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, float, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { number, string } from 'typescript-json-decoder';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { decodeCodedWithExceptions } from './DecodeCodedWithExceptions.ts';
import { decodeEntityIdentifier } from './DecodeEntityIdentifier.ts';
import { ExtendedCommunicationNumber } from '../../Types/DataTypes/ExtendedCommunicationNumber.ts';
import { decodeTelecommunicationEquipmentType } from '../Tables/DecodeTelecommunicationEquipmentType.ts';
import { decodeTelecommunicationUseCode } from '../Tables/DecodeTelecommunicationUseCode.ts';

export const decodeExtendedCommunicationNumber = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'ExtendedCommunicationNumber (XTN)',
    type,
    settings,
    (data: unknown[]): ExtendedCommunicationNumber => ({
      telephoneNumber: optComponent('XTN.1', 0, string, data[0]),
      telecommunicationUseCode: optComponent('XTN.2', 0, decodeTelecommunicationUseCode, data[1]),
      telecommunicationEquipmentType: reqComponent('XTN.3', 0, decodeTelecommunicationEquipmentType, data[2]),
      communicationAddress: optComponent('XTN.4', 0, string, data[3]),
      countryCode: optComponent('XTN.5', 0, string, data[4]),
      areaCode: optComponent('XTN.6', 0, string, data[5]),
      localNumber: optComponent('XTN.7', 0, string, data[6]),
      extension: optComponent('XTN.8', 0, string, data[7]),
      anyText: optComponent('XTN.9', 0, string, data[8]),
      extensionPrefix: optComponent('XTN.10', 0, string, data[9]),
      speedDialCode: optComponent('XTN.11', 0, string, data[10]),
      unformattedTelephoneNumber: optComponent('XTN.12', 0, string, data[11]),
      effectiveStartDate: optComponent('XTN.13', 0, decodeDatetime, data[12]),
      expirationDate: optComponent('XTN.14', 0, decodeDatetime, data[13]),
      expirationReason: optComponent('XTN.15', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[14]),
      protectionCode: optComponent('XTN.16', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[15]),
      sharedTelecommunicationIdentifier: optComponent('XTN.17', 0, decodeEntityIdentifier(getNextHL7Type(type), settings), data[16]),
      preferenceOrder: optComponent('XTN.18', 0, float, data[17]),
    }),
  );
