import { getNextHL7Type, HL7Settings, HL7Type, sepFromHL7Type } from '../../utils/HL7Settings.ts';
import { VersionIdentifier } from '../../Types/DataTypes/VersionIdentifier.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';
import { encodeCodedWithExceptions } from './EncodeCodedWithExceptions.ts';

export const encodeVersionIdentifier = (item: VersionIdentifier | undefined, type: HL7Type, settings: HL7Settings): string | undefined => {
  if (!item) {
    return undefined;
  }
  return makeComponent(
    sepFromHL7Type(type, settings),
    encodeString(item.versionId, getNextHL7Type(type), settings),
    encodeCodedWithExceptions(item.internationalizationCode, getNextHL7Type(type), settings),
    encodeCodedWithExceptions(item.internationalVersionId, getNextHL7Type(type), settings),
  );
};
