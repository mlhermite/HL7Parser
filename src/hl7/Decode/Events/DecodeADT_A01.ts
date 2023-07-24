import { decodeMessageHeader } from '../Segments/DecodeMessageHeader.ts';
import { string } from 'typescript-json-decoder';
import { eventRegex, HL7Settings, settingsFromMSH } from '../../utils/HL7Settings.ts';
import { decodeRepeatableSegment, decodeRequiredSegment, decodeSegment } from '../../utils/DecoderUtils.ts';
import { ADT_A01 } from '../../Types/Events/ADT_A01.ts';
import { decodeSoftwareSegment } from '../Segments/DecodeSoftwareSegment.ts';
import { decodeUserAuthenticationCredentialSegment } from '../Segments/DecodeUserAuthenticationCredentialSegment.ts';
import { decodeEventTypeSegment } from '../Segments/DecodeEventTypeSegment.ts';
import { decodePatientIdentification } from '../Segments/DecodePatientIdentification.ts';
import { decodePatientVisit } from '../Segments/DecodePatientVisit.ts';
import { MessageHeader } from '../../Types/Segments/MessageHeader.ts';

/**
 * General acknowledgment
 *
 */
export const decodeADT_A01 = (MSH: MessageHeader, data: string[], settings: HL7Settings): ADT_A01 => {
  const SFT = decodeRepeatableSegment('SFT', decodeSoftwareSegment(settings), data);
  const UAC = decodeSegment('UAC', decodeUserAuthenticationCredentialSegment(settings), data);
  const EVN = decodeRequiredSegment('EVN', decodeEventTypeSegment(settings), data);
  const PID = decodeRequiredSegment('PID', decodePatientIdentification(settings), data);
  const PV1 = decodeRequiredSegment('PV1', decodePatientVisit(settings), data);

  return {
    MSH,
    SFT,
    UAC,
    EVN,
    PID,
    PV1,
  };
};
