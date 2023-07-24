import { getNextHL7Type, HL7Settings, HL7Type, sepFromHL7Type } from '../../utils/HL7Settings.ts';
import { HierarchicDesignator } from '../../Types/DataTypes/HierarchicDesignator.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';

export const encodeHierarchicDesignator = (item: HierarchicDesignator | undefined, type: HL7Type, settings: HL7Settings): string | undefined => {
  if (!item) {
    return undefined;
  }
  return makeComponent(
    sepFromHL7Type(type, settings),
    encodeString(item.namespaceId, getNextHL7Type(type), settings), // HD.1
    encodeString(item.universalId, getNextHL7Type(type), settings), // HD.2
    encodeString(item.universalIdType, getNextHL7Type(type), settings), // HD.3
  );
};
