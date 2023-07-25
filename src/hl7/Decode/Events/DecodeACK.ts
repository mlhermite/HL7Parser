import { ACK } from '../../Types/Events/ACK.ts';
import { decodeMessageAcknowledgment } from '../Segments/DecodeMessageAcknowledgment.ts';
import { decodeRepeatableSegment, decodeRequiredSegment, decodeSegment } from '../../utils/DecoderUtils.ts';
import { decodeErrorSegment } from '../Segments/DecodeErrorSegment.ts';
import { decodeSoftwareSegment } from '../Segments/DecodeSoftwareSegment.ts';
import { decodeUserAuthenticationCredentialSegment } from '../Segments/DecodeUserAuthenticationCredentialSegment.ts';
import { MessageHeader } from '../../Types/Segments/MessageHeader.ts';
import { HL7Settings } from '../../utils/HL7Settings.ts';

/**
 * General acknowledgment
 *
 */
export const decodeACK = (MSH: MessageHeader, data: string[], settings: HL7Settings): ACK => {
    const MSA = decodeRequiredSegment('MSA', decodeMessageAcknowledgment(settings), data);
    const SFT = decodeRepeatableSegment('SFT', decodeSoftwareSegment(settings), data);
    const ERR = decodeRepeatableSegment('ERR', decodeErrorSegment(settings), data);
    const UAC = decodeSegment('UAC', decodeUserAuthenticationCredentialSegment(settings), data);
    return {
        MSH,
        SFT,
        UAC,
        MSA,
        ERR,
    };
};
