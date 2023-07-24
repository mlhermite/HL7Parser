import { arrayWithContext, opt } from "../../utils/DecoderUtils.ts";
import { string } from "typescript-json-decoder";
import { CodedWithExceptions } from "../../Types/DataTypes/CodedWithExceptions.ts";
import { decodeCodingSystem } from "../Tables/DecodeCodingSystem.ts";
import { decodeDatetime } from "../Tables/DecodeDatetime.ts";
import { HL7Settings, HL7Type } from "../../utils/HL7Settings.ts";

export const decodeCodedWithExceptions = (
  type: HL7Type,
  settings: HL7Settings,
) =>
  arrayWithContext(
    "CodedWithExceptions (CWE)",
    type,
    settings,
    (data: unknown[]): CodedWithExceptions => ({
      identifier: opt(string)(data[0]),
      text: opt(string)(data[1]),
      nameOfCodingSystem: opt(decodeCodingSystem)(data[2]),
      alternateIdentifier: opt(string)(data[3]),
      alternateText: opt(string)(data[4]),
      nameOfAlternateCodingSystem: opt(decodeCodingSystem)(data[5]),
      codingSystemVersionId: opt(string)(data[6]),
      alternateCodingSystemVersionId: opt(string)(data[7]),
      originalText: opt(string)(data[8]),
      secondAlternateIdentifier: opt(string)(data[9]),
      secondAlternateText: opt(string)(data[10]),
      nameOfSecondAlternateCodingSystem: opt(decodeCodingSystem)(data[11]),
      secondAlternateCodingSystemVersionId: opt(string)(data[12]),
      codingSystemOid: opt(string)(data[13]),
      valueSetOid: opt(string)(data[14]),
      valueSetVersionId: opt(decodeDatetime)(data[15]),
      alternateCodingSystemOid: opt(string)(data[16]),
      alternateValueSetOid: opt(string)(data[17]),
      alternateValueSetVersionId: opt(decodeDatetime)(data[18]),
      secondAlternateCodingSystemOid: opt(string)(data[19]),
      secondAlternateValueSetOid: opt(string)(data[20]),
      secondAlternateValueSetVersionId: opt(decodeDatetime)(data[21]),
    }),
  );
