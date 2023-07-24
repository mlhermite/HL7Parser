import { HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';

export const encodeString = (value: string | undefined, _: HL7Type, __: HL7Settings): string | undefined => value;
