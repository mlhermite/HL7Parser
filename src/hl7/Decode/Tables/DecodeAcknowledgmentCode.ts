import { stringUnion } from "../../utils/DecoderUtils.ts";
import { AcknowledgmentCode } from "../../Types/Tables/AcknowledgmentCode.ts";

export const decodeAcknowledgmentCode = stringUnion<AcknowledgmentCode>(
  "AA",
  "AE",
  "AR",
  "CA",
  "CE",
  "CR",
);
