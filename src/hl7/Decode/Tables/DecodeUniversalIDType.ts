import { stringUnion } from "../../utils/DecoderUtils.ts";
import { UniversalIDType } from "../../Types/Tables/UniversalIDType.ts";

export const decodeUniversalIDType = stringUnion<UniversalIDType>(
  "CLIA",
  "CLIP",
  "DNS",
  "EUI64",
  "GUID",
  "HCD",
  "HL7",
  "ISO",
  "L",
  "M",
  "N",
  "Random",
  "URI",
  "UUID",
  "x400",
  "x500",
);
