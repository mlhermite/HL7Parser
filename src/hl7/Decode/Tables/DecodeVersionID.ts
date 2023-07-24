import { VersionID } from "../../Types/Tables/VersionID.ts";
import { stringUnion } from "../../utils/DecoderUtils.ts";

export const decodeVersionID = stringUnion<VersionID>(
  "2.0",
  "2.0D",
  "2.1",
  "2.2",
  "2.3",
  "2.3.1",
  "2.4",
  "2.5",
  "2.5.1",
  "2.6",
  "2.7",
  "2.7.1",
  "2.8",
);
