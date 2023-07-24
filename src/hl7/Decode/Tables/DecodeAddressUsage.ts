import { stringUnion } from '../../utils/DecoderUtils.ts';
import { AddressUsage } from '../../Types/Tables/AddressUsage.ts';

export const decodeAddressUsage = stringUnion<AddressUsage>('C', 'M', 'V');
