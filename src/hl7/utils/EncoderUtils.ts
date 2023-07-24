import { HL7Settings, HL7Type } from './HL7Settings.ts';

export const makeSegment = (...values: (string | undefined)[]): string => values.map(v => (v ? `${v}\r` : '')).join('');

export const makeComponent = (sep: string, ...values: (string | undefined)[]): string =>
  values
    .map(v => v ?? '')
    .reduceRight((acc, value) => {
      if (acc.length > 0 || value !== '') {
        acc.unshift(value);
      }
      return acc;
    }, [] as string[])
    .join(sep);

export const encodeList = <T>(
  values: T[] | undefined,
  encode: (value: T, type: HL7Type, settings: HL7Settings) => string | undefined,
  type: HL7Type,
  settings: HL7Settings,
) => (values ? values.map(value => encode(value, type, settings)).join(settings.repetitionSeparator) : undefined);
