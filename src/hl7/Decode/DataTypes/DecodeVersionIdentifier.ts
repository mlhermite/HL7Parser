import {
  getNextHL7Type,
  HL7Settings,
  HL7Type,
} from "../../utils/HL7Settings.ts";
import { arrayWithContext, opt } from "../../utils/DecoderUtils.ts";
import { VersionIdentifier } from "../../Types/DataTypes/VersionIdentifier.ts";
import { decodeVersionID } from "../Tables/DecodeVersionID.ts";
import { decodeCodedWithExceptions } from "./DecodeCodedWithExceptions.ts";

export const decodeVersionIdentifier = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    "VersionIdentifier (VID)",
    type,
    settings,
    (data): VersionIdentifier => ({
      versionId: decodeVersionID(data[0]),
      internationalizationCode: opt(
        decodeCodedWithExceptions(getNextHL7Type(type), settings),
      )(data[1]),
      internationalVersionId: opt(
        decodeCodedWithExceptions(getNextHL7Type(type), settings),
      )(data[2]),
    }),
  );
