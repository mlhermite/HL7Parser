import { stringUnion } from '../../utils/DecoderUtils.ts';
import { CheckDigitScheme } from '../../Types/Tables/CheckDigitScheme.ts';

export const decodeCheckDigitScheme = stringUnion<CheckDigitScheme>('BCV', 'ISO', 'M10', 'M11', 'NPI');
