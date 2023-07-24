import { stringUnion } from '../../utils/DecoderUtils.ts';
import { Encoding } from '../../Types/Tables/Encoding.ts';

export const decodeEncoding = stringUnion<Encoding>('A', 'Base64', 'Hex');
