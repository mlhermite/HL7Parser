import { MessageHeader } from "../Segments/MessageHeader.ts";
import { MessageAcknowledgment } from "../Segments/MessageAcknowledgment.ts";
import { ErrorSegment } from "../Segments/ErrorSegment.ts";
import { SoftwareSegment } from "../Segments/SoftwareSegment.ts";
import { UserAuthenticationCredentialSegment } from "../Segments/UserAuthenticationCredentialSegment.ts";

/**
 * General acknowledgment
 */
export type ACK = {
  MSH: MessageHeader;
  SFT: SoftwareSegment[];
  UAC?: UserAuthenticationCredentialSegment;
  MSA: MessageAcknowledgment;
  ERR: ErrorSegment[];
};
