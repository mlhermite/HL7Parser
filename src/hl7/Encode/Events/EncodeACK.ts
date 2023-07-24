import { ACK } from '../../Types/Events/ACK.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { settingsFromMSH } from '../../utils/HL7Settings.ts';
import { encodeMessageHeader } from '../Segments/EncodeMessageHeader.ts';
import { encodeMessageAcknowledgment } from '../Segments/EncodeMessageAcknowledgment.ts';
import { encodeErrorSegment } from '../Segments/EncodeErrorSegment.ts';

/**
 * General acknowledgment
 *
 */
export const encodeACK = (ACK: ACK): string => {
  const settings = settingsFromMSH(ACK.MSH);
  return makeComponent(
    '\r',
    encodeMessageHeader(ACK.MSH, settings),
    encodeMessageAcknowledgment(ACK.MSA, settings),
    ...ACK.ERR.flatMap(err => encodeErrorSegment(err, settings)),
  );
};
