import { encodeList, makeComponent } from '../../utils/EncoderUtils.ts';
import { ErrorSegment } from '../../Types/Segments/ErrorSegment.ts';
import { HL7Settings } from '../../utils/HL7Settings.ts';
import { encodeString } from '../Values/EncodeString.ts';
import { encodeCodedWithExceptions } from '../DataTypes/EncodeCodedWithExceptions.ts';
import { encodeErrorLocation } from '../DataTypes/EncodeErrorLocation.ts';
import { encodeExtendedCommunicationNumber } from '../DataTypes/EncodeExtendedCommunicationNumber.ts';

export const encodeErrorSegment = (item: ErrorSegment, settings: HL7Settings): string | undefined => {
  return makeComponent(
    settings.fieldSeparator,
    'ERR',
    encodeString(item.errorCodeAndLocation, 'component', settings), // ERR.1
    encodeList(item.errorLocation, encodeErrorLocation, 'component', settings), // ERR.2
    encodeCodedWithExceptions(item.hl7ErrorCode, 'component', settings), // ERR.3
    encodeString(item.severity, 'component', settings), // ERR.4
    encodeCodedWithExceptions(item.applicationErrorCode, 'component', settings), // ERR.5
    encodeList(item.applicationErrorParameter, encodeString, 'component', settings), // ERR.6
    encodeString(item.diagnosticInformation, 'component', settings), // ERR.7
    encodeString(item.userMessage, 'component', settings), // ERR.8
    encodeList(item.informPersonIndicator, encodeCodedWithExceptions, 'component', settings), // ERR.9
    encodeCodedWithExceptions(item.overrideType, 'component', settings), // ERR.10
    encodeList(item.overrideReasonCode, encodeCodedWithExceptions, 'component', settings), // ERR.11
    encodeList(item.helpDeskContactPoint, encodeExtendedCommunicationNumber, 'component', settings), // ERR.12
  );
};
