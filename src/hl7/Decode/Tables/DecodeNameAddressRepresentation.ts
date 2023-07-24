import { stringUnion } from "../../utils/DecoderUtils.ts";
import { NameAddressRepresentation } from "../../Types/Tables/NameAddressRepresentation.ts";

export const decodeNameAddressRepresentation =
  stringUnion<NameAddressRepresentation>("A", "I", "P");
