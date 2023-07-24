import {
  getNextHL7Type,
  HL7Settings,
  HL7Type,
} from "../../utils/HL7Settings.ts";
import { arrayWithContext, opt } from "../../utils/DecoderUtils.ts";
import { ExtendedOrganizationIdentifier } from "../../Types/DataTypes/ExtendedOrganizationIdentifier.ts";
import { string } from "typescript-json-decoder";
import { decodeCodedWithExceptions } from "./DecodeCodedWithExceptions.ts";
import { decodeIdentifierType } from "../Tables/DecodeIdentifierType.ts";
import { decodeNameAddressRepresentation } from "../Tables/DecodeNameAddressRepresentation.ts";
import { decodeHierarchicDesignator } from "./DecodeHierarchicDesignator.ts";

export const decodeExtendedOrganizationIdentifier = (
  type: HL7Type,
  settings: HL7Settings,
) =>
  arrayWithContext(
    "ExtendedOrganizationIdentifier (CWE)",
    type,
    settings,
    (data): ExtendedOrganizationIdentifier => ({
      organizationName: opt(string)(data[0]),
      organizationNameTypeCode: opt(
        decodeCodedWithExceptions(getNextHL7Type(type), settings),
      )(data[1]),
      idNumber: opt(string)(data[2]),
      identifierCheckDigit: opt(string)(data[3]),
      checkDigitScheme: opt(string)(data[4]),
      assigningAuthority: opt(
        decodeHierarchicDesignator(getNextHL7Type(type), settings),
      )(data[5]),
      identifierTypeCode: opt(decodeIdentifierType)(data[6]),
      assigningFacility: opt(
        decodeHierarchicDesignator(getNextHL7Type(type), settings),
      )(data[7]),
      nameRepresentationCode: opt(decodeNameAddressRepresentation)(data[8]),
      organizationIdentifier: opt(string)(data[9]),
    }),
  );
