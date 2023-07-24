import { AcknowledgmentCode } from '../Tables/AcknowledgmentCode.ts';
import { MessageWaitingPriority } from '../Tables/MessageWaitingPriority.ts';

/**
 *
 * HL7 v2.8 - MSA - Message Acknowledgment
 *
 * The MSA segment contains information sent while acknowledging another message.
 *
 * <pre>
 * MSA.1 - Acknowledgment Code  ----------  2    ID  Required   Single
 * MSA.2 - Message Control Id  -----------  199  ST  Required   Single
 * MSA.3 - Text Message  -----------------  0    ST  Withdrawn  Single
 * MSA.4 - Expected Sequence Number  -----  0    NM  Optional   Single
 * MSA.5 - Delayed Acknowledgment Type  --  0    ST  Withdrawn  Single
 * MSA.6 - Error Condition  --------------  0    ST  Withdrawn  Single
 * MSA.7 - Message Waiting Number  -------  0    NM  Optional   Single
 * MSA.8 - Message Waiting Priority  -----  1    ID  Optional   Single
 * </pre>
 */
export type MessageAcknowledgment = {
  acknowledgmentCode: AcknowledgmentCode; // MSA.1
  messageControlId: string; // MSA.2
  textMessage?: string; // MSA.3
  expectedSequenceNumber?: number; // MSA.4
  delayedAcknowledgmentType?: string; // MSA.5
  errorCondition?: string; // MSA.6
  messageWaitingNumber?: number; // MSA.7
  messageWaitingPriority?: MessageWaitingPriority; // MSA.8
};
