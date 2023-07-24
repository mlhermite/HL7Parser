import { stringUnion } from "../../utils/DecoderUtils.ts";
import { AlternateCharacterSets } from "../../Types/Tables/AlternateCharacterSets.ts";

export const decodeAlternateCharacterSets = stringUnion<AlternateCharacterSets>(
  "8859/1",
  "8859/15",
  "8859/2",
  "8859/3",
  "8859/4",
  "8859/5",
  "8859/6",
  "8859/7",
  "8859/8",
  "8859/9",
  "ASCII",
  "BIG-5",
  "CNS 11643-1992",
  "GB 18030-2000",
  "ISO IR14",
  "ISO IR159",
  "ISO IR6",
  "ISO IR87",
  "KS X 1001",
  "UNICODE",
  "UNICODE UTF-16",
  "UNICODE UTF-32",
  "UNICODE UTF-8",
);
