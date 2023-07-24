import { stringUnion } from "../../utils/DecoderUtils.ts";
import { MessageWaitingPriority } from "../../Types/Tables/MessageWaitingPriority.ts";

export const decodeMessageWaitingPriority = stringUnion<MessageWaitingPriority>(
  "H",
  "M",
  "L",
);
