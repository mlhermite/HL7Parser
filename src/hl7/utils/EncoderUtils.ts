import { encodeString } from '../Encode/Values/EncodeString.ts';
import { HL7Settings, HL7Type } from './HL7Settings.ts';

export const makeComponent = (sep: string, ...values: (string | undefined)[]): string => values.map(v => v ?? '').join(sep);

export const encodeList = <T>(
  values: T[] | undefined,
  encode: (value: T, type: HL7Type, settings: HL7Settings) => string | undefined,
  type: HL7Type,
  settings: HL7Settings,
) => (values ? values.map(value => encode(value, type, settings)).join(settings.repetitionSeparator) : undefined);
