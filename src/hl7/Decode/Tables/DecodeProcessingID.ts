import { stringUnion } from "../../utils/DecoderUtils.ts";

export const decodeProcessingID = stringUnion("D", "P", "T");
