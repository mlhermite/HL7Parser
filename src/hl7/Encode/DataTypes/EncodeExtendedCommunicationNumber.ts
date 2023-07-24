import { getNextHL7Type, HL7Settings, HL7Type, sepFromHL7Type } from '../../utils/HL7Settings.ts';
import { ExtendedCommunicationNumber } from '../../Types/DataTypes/ExtendedCommunicationNumber.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';
import { encodeNumber } from '../Values/EncodeNumber.ts';
import { encodeCodedWithExceptions } from './EncodeCodedWithExceptions.ts';
import { encodeEntityIdentifier } from './EncodeEntityIdentifier.ts';

export const encodeExtendedCommunicationNumber = (
  item: ExtendedCommunicationNumber | undefined,
  type: HL7Type,
  settings: HL7Settings,
): string | undefined => {
  if (!item) {
    return undefined;
  }
  return makeComponent(
    sepFromHL7Type(type, settings),
    encodeString(item.telephoneNumber, getNextHL7Type(type), settings), // XTN.1
    encodeString(item.telecommunicationUseCode, getNextHL7Type(type), settings), // XTN.2
    encodeString(item.telecommunicationEquipmentType, getNextHL7Type(type), settings), // XTN.3
    encodeString(item.communicationAddress, getNextHL7Type(type), settings), // XTN.4
    encodeString(item.countryCode, getNextHL7Type(type), settings), // XTN.5
    encodeString(item.areaCode, getNextHL7Type(type), settings), // XTN.6
    encodeString(item.localNumber, getNextHL7Type(type), settings), // XTN.7
    encodeString(item.extension, getNextHL7Type(type), settings), // XTN.8
    encodeString(item.anyText, getNextHL7Type(type), settings), // XTN.9
    encodeString(item.extensionPrefix, getNextHL7Type(type), settings), // XTN.10
    encodeString(item.speedDialCode, getNextHL7Type(type), settings), // XTN.11
    encodeString(item.unformattedTelephoneNumber, getNextHL7Type(type), settings), // XTN.12
    encodeString(item.effectiveStartDate, getNextHL7Type(type), settings), // XTN.13
    encodeString(item.expirationDate, getNextHL7Type(type), settings), // XTN.14
    encodeCodedWithExceptions(item.expirationReason, getNextHL7Type(type), settings), // XTN.15
    encodeCodedWithExceptions(item.protectionCode, getNextHL7Type(type), settings), // XTN.16
    encodeEntityIdentifier(item.sharedTelecommunicationIdentifier, getNextHL7Type(type), settings), // XTN.17
    encodeNumber(item.preferenceOrder, getNextHL7Type(type), settings), // XTN.18
  );
};
