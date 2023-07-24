import { stringUnion } from "../../utils/DecoderUtils.ts";
import { AlternateCharacterSetHandlingScheme } from "../../Types/Tables/AlternateCharacterSetHandlingScheme.ts";

export const decodeAlternateCharacterSetHandlingScheme =
  stringUnion<AlternateCharacterSetHandlingScheme>("ISO 2022-1994", "2.3");
