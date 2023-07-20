import { ParserSettings } from "../HL7MessageObjects.ts";

export const escapableRegex = (char: string, escapeChar: string) =>
  new RegExp(
    `(?:(?<!${escapeChar}${escapeChar})|(?<=(?:${escapeChar}${escapeChar}${escapeChar}${escapeChar})+))${escapeChar}${char}`,
  );

export const segmentRegex = (p: ParserSettings) =>
  escapableRegex(p.fieldSeparator, p.escapeCharacter);
export const componentRegex = (p: ParserSettings) =>
  escapableRegex(p.componentSeparator, p.escapeCharacter);
export const repeatRegex = (p: ParserSettings) =>
  escapableRegex(p.repetitionSeparator, p.escapeCharacter);
export const subcomponentRegex = (p: ParserSettings) =>
  escapableRegex(p.subcomponentSeparator, p.escapeCharacter);
