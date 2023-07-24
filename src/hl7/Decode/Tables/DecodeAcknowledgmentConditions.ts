import { stringUnion } from "../../utils/DecoderUtils.ts";
import { AcknowledgmentConditions } from "../../Types/Tables/AcknowledgmentConditions.ts";

export const decodeAcknowledgmentConditions =
  stringUnion<AcknowledgmentConditions>("AL", "ER", "NE", "SU");
