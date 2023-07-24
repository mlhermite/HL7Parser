import { HL7Settings } from '../../utils/HL7Settings.ts';
import { arrayWithContext, listComponent, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { string } from 'typescript-json-decoder';
import { ErrorSegment } from '../../Types/Segments/ErrorSegment.ts';
import { decodeCodedWithExceptions } from '../DataTypes/DecodeCodedWithExceptions.ts';
import { decodeErrorSeverity } from '../Tables/DecodeErrorSeverity.ts';
import { decodeErrorLocation } from '../DataTypes/DecodeErrorLocation.ts';
import { decodeExtendedCommunicationNumber } from '../DataTypes/DecodeExtendedCommunicationNumber.ts';

export const decodeErrorSegment = (settings: HL7Settings) =>
  arrayWithContext(
    'ErrorSegment (ERR)',
    'segment',
    settings,
    (data): ErrorSegment => ({
      errorCodeAndLocation: optComponent('ERR.1', 0, string, data[1]), // ERR.1
      errorLocation: listComponent('ERR.2', decodeErrorLocation('component', settings), 'infinite', false, data[2], settings), // ERR.2
      hl7ErrorCode: reqComponent('ERR.3', 0, decodeCodedWithExceptions('component', settings), data[3]),
      severity: reqComponent('ERR.4', 0, decodeErrorSeverity, data[4]),
      applicationErrorCode: optComponent('ERR.5', 0, decodeCodedWithExceptions('component', settings), data[5]),
      applicationErrorParameter: listComponent('ERR.6', string, 'infinite', false, data[6], settings),
      diagnosticInformation: optComponent('ERR.7', 0, string, data[7]),
      userMessage: optComponent('ERR.8', 0, string, data[8]),
      informPersonIndicator: listComponent('ERR.9', decodeCodedWithExceptions('component', settings), 'infinite', false, data[9], settings),
      overrideType: optComponent('ERR.10', 0, decodeCodedWithExceptions('component', settings), data[10]),
      overrideReasonCode: listComponent('ERR.11', decodeCodedWithExceptions('component', settings), 'infinite', false, data[11], settings),
      helpDeskContactPoint: listComponent('ERR.12', decodeExtendedCommunicationNumber('component', settings), 'infinite', false, data[12], settings),
    }),
  );
