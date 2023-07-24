import { getNextHL7Type, HL7Settings, HL7Type, sepFromHL7Type } from '../../utils/HL7Settings.ts';

import { MessageType } from '../../Types/DataTypes/MessageType.ts';

import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';

export const encodeMessageType = (item: MessageType | undefined, type: HL7Type, settings: HL7Settings): string | undefined => {
  if (!item) {
    return undefined;
  }
  return makeComponent(
    sepFromHL7Type(type, settings),
    encodeString(item.messageCode, getNextHL7Type(type), settings),
    encodeString(item.triggerEvent, getNextHL7Type(type), settings),
    encodeString(item.messageStructure, getNextHL7Type(type), settings),
  );
};
