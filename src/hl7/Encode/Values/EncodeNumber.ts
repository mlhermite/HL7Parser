import { HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';

export const encodeNumber = (value: number | undefined, _: HL7Type, __: HL7Settings): string | undefined =>
  value !== undefined ? value.toString() : undefined;
