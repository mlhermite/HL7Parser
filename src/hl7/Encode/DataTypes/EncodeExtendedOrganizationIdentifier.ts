import { getNextHL7Type, HL7Settings, HL7Type, sepFromHL7Type } from '../../utils/HL7Settings.ts';
import { ExtendedOrganizationIdentifier } from '../../Types/DataTypes/ExtendedOrganizationIdentifier.ts';
import { makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';
import { encodeCodedWithExceptions } from './EncodeCodedWithExceptions.ts';
import { encodeHierarchicDesignator } from './EncodeHierarchicDesignator.ts';

export const encodeExtendedOrganizationIdentifier = (
  item: ExtendedOrganizationIdentifier | undefined,
  type: HL7Type,
  settings: HL7Settings,
): string | undefined => {
  if (!item) {
    return undefined;
  }
  return makeComponent(
    sepFromHL7Type(type, settings),
    encodeString(item.organizationName, getNextHL7Type(type), settings),
    encodeCodedWithExceptions(item.organizationNameTypeCode, getNextHL7Type(type), settings),
    encodeString(item.idNumber, getNextHL7Type(type), settings),
    encodeString(item.identifierCheckDigit, getNextHL7Type(type), settings),
    encodeString(item.checkDigitScheme, getNextHL7Type(type), settings),
    encodeHierarchicDesignator(item.assigningAuthority, getNextHL7Type(type), settings),
    encodeString(item.identifierTypeCode, getNextHL7Type(type), settings),
    encodeHierarchicDesignator(item.assigningFacility, getNextHL7Type(type), settings),
    encodeString(item.nameRepresentationCode, getNextHL7Type(type), settings),
    encodeString(item.organizationIdentifier, getNextHL7Type(type), settings),
  );
};
