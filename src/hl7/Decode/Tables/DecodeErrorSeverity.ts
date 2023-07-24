import { stringUnion } from '../../utils/DecoderUtils.ts';
import { ErrorSeverity } from '../../Types/Tables/ErrorSeverity.ts';

export const decodeErrorSeverity = stringUnion<ErrorSeverity>('E', 'F', 'I', 'W');
