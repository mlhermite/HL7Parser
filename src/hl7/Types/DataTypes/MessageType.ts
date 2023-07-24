import { MessageCode } from '../Tables/MessageCode.ts';
import { EventType } from '../Tables/EventType.ts';
import { MessageStructure } from '../Tables/MessageStructure.ts';

/**
 *
 * <pre>
 * MSG.1 - Message Code  -------  3  ID  Required  Single
 * MSG.2 - Trigger Event  ------  3  ID  Required  Single
 * MSG.3 - Message Structure  --  7  ID  Required  Single
 * </pre>
 */
export type MessageType = {
  messageCode: MessageCode;
  triggerEvent: EventType;
  messageStructure: MessageStructure;
};
