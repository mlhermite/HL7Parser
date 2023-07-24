import { getNextHL7Type, HL7Settings, HL7Type, sepFromHL7Type } from '../../utils/HL7Settings.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';
import { ErrorLocation } from '../../Types/DataTypes/ErrorLocation.ts';
import { encodeNumber } from '../Values/EncodeNumber.ts';

export const encodeErrorLocation = (item: ErrorLocation | undefined, type: HL7Type, settings: HL7Settings): string | undefined => {
  if (!item) {
    return undefined;
  }
  return makeComponent(
    sepFromHL7Type(type, settings),
    encodeString(item.SegmentId, getNextHL7Type(type), settings), // ERL.1
    encodeNumber(item.SegmentSequence, getNextHL7Type(type), settings), // ERL.2
    encodeNumber(item.FieldPosition, getNextHL7Type(type), settings), // ERL.3
    encodeNumber(item.FieldRepetition, getNextHL7Type(type), settings), // ERL.4
    encodeNumber(item.ComponentNumber, getNextHL7Type(type), settings), // ERL.5
    encodeNumber(item.SubComponentNumber, getNextHL7Type(type), settings), // ERL.6
  );
};
