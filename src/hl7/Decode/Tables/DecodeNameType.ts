import { stringUnion } from '../../utils/DecoderUtils.ts';
import { NameType } from '../../Types/Tables/NameType.ts';

export const decodeNameType = stringUnion<NameType>(
  'A',
  'B',
  'BAD',
  'C',
  'D',
  'I',
  'K',
  'L',
  'M',
  'MSK',
  'N',
  'NAV',
  'NB',
  'NOUSE',
  'P',
  'R',
  'REL',
  'S',
  'T',
  'TEMP',
  'U',
);
