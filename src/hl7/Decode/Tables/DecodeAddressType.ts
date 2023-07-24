import { stringUnion } from '../../utils/DecoderUtils.ts';
import { AddressType } from '../../Types/Tables/AddressType.ts';

export const decodeAddressType = stringUnion<AddressType>(
  'B',
  'BA',
  'BDL',
  'BI',
  'BR',
  'C',
  'F',
  'H',
  'L',
  'M',
  'N',
  'O',
  'P',
  'RH',
  'S',
  'SH',
  'TM',
  'V',
);
