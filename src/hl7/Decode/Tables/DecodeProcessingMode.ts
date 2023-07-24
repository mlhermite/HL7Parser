import { stringUnion } from "../../utils/DecoderUtils.ts";
import { ProcessingMode } from "../../Types/Tables/ProcessingMode.ts";

export const decodeProcessingMode = stringUnion<ProcessingMode>(
  "A",
  "I",
  "Not present",
  "R",
  "T",
);
