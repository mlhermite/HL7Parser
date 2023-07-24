import { CodedWithExceptions } from '../../Types/DataTypes/CodedWithExceptions.ts';
import { getNextHL7Type, HL7Settings, HL7Type, sepFromHL7Type } from '../../utils/HL7Settings.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';

export const encodeCodedWithExceptions = (item: CodedWithExceptions | undefined, type: HL7Type, settings: HL7Settings): string | undefined => {
  if (!item) {
    return undefined;
  }
  return makeComponent(
    sepFromHL7Type(type, settings),
    encodeString(item.identifier, getNextHL7Type(type), settings),
    encodeString(item.text, getNextHL7Type(type), settings),
    encodeString(item.nameOfCodingSystem, getNextHL7Type(type), settings),
    encodeString(item.alternateIdentifier, getNextHL7Type(type), settings),
    encodeString(item.alternateText, getNextHL7Type(type), settings),
    encodeString(item.nameOfAlternateCodingSystem, getNextHL7Type(type), settings),
    encodeString(item.codingSystemVersionId, getNextHL7Type(type), settings),
    encodeString(item.alternateCodingSystemVersionId, getNextHL7Type(type), settings),
    encodeString(item.originalText, getNextHL7Type(type), settings),
    encodeString(item.secondAlternateIdentifier, getNextHL7Type(type), settings),
    encodeString(item.secondAlternateText, getNextHL7Type(type), settings),
    encodeString(item.nameOfSecondAlternateCodingSystem, getNextHL7Type(type), settings),
    encodeString(item.secondAlternateCodingSystemVersionId, getNextHL7Type(type), settings),
    encodeString(item.codingSystemOid, getNextHL7Type(type), settings),
    encodeString(item.valueSetOid, getNextHL7Type(type), settings),
    encodeString(item.valueSetVersionId, getNextHL7Type(type), settings),
    encodeString(item.alternateCodingSystemOid, getNextHL7Type(type), settings),
    encodeString(item.alternateValueSetOid, getNextHL7Type(type), settings),
    encodeString(item.alternateValueSetVersionId, getNextHL7Type(type), settings),
    encodeString(item.secondAlternateCodingSystemOid, getNextHL7Type(type), settings),
    encodeString(item.secondAlternateValueSetOid, getNextHL7Type(type), settings),
    encodeString(item.secondAlternateValueSetVersionId, getNextHL7Type(type), settings),
  );
};
