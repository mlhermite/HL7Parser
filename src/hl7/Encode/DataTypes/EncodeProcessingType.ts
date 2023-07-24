import { getNextHL7Type, HL7Settings, HL7Type, sepFromHL7Type } from '../../utils/HL7Settings.ts';
import { ProcessingType } from '../../Types/DataTypes/ProcessingType.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';

export const encodeProcessingType = (item: ProcessingType | undefined, type: HL7Type, settings: HL7Settings): string | undefined => {
  if (!item) {
    return undefined;
  }
  return makeComponent(
    sepFromHL7Type(type, settings),
    encodeString(item.processingId, getNextHL7Type(type), settings),
    encodeString(item.processingMode, getNextHL7Type(type), settings),
  );
};
