import { HL7Settings } from '../../utils/HL7Settings.ts';
import { MessageAcknowledgment } from '../../Types/Segments/MessageAcknowledgment.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';
import { encodeNumber } from '../Values/EncodeNumber.ts';

export const encodeMessageAcknowledgment = (item: MessageAcknowledgment, settings: HL7Settings): string | undefined => {
  return makeComponent(
    settings.fieldSeparator,
    'MSA',
    encodeString(item.acknowledgmentCode, 'component', settings), // MSA.1
    encodeString(item.messageControlId, 'component', settings), // MSA.2
    encodeString(item.textMessage, 'component', settings), // MSA.3
    encodeNumber(item.expectedSequenceNumber, 'component', settings), // MSA.4
    encodeString(item.delayedAcknowledgmentType, 'component', settings), // MSA.5
    encodeString(item.errorCondition, 'component', settings), // MSA.6
    encodeNumber(item.messageWaitingNumber, 'component', settings), // MSA.7
    encodeString(item.messageWaitingPriority, 'component', settings), // MSA.8
  );
};
