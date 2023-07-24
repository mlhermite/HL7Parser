import { getNextHL7Type, HL7Settings, HL7Type, sepFromHL7Type } from '../../utils/HL7Settings.ts';
import { EntityIdentifier } from '../../Types/DataTypes/EntityIdentifier.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';

export const encodeEntityIdentifier = (item: EntityIdentifier | undefined, type: HL7Type, settings: HL7Settings): string | undefined => {
  if (!item) {
    return undefined;
  }
  return makeComponent(
    sepFromHL7Type(type, settings),
    encodeString(item.entityIdentifier, getNextHL7Type(type), settings), // EI.1
    encodeString(item.namespaceId, getNextHL7Type(type), settings), // EI.2
    encodeString(item.universalId, getNextHL7Type(type), settings), // EI.3
    encodeString(item.universalIdType, getNextHL7Type(type), settings), // EI.4
  );
};
