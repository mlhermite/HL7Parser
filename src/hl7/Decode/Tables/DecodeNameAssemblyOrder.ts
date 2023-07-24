import { stringUnion } from '../../utils/DecoderUtils.ts';
import { NameAssemblyOrder } from '../../Types/Tables/NameAssemblyOrder.ts';

export const decodeNameAssemblyOrder = stringUnion<NameAssemblyOrder>('F', 'G');
