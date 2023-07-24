import { stringUnion } from '../../utils/DecoderUtils.ts';
import { SubtypeOfReferencedData } from '../../Types/Tables/SubtypeOfReferencedData.ts';

export const decodeSubtypeOfReferencedData = stringUnion<SubtypeOfReferencedData>('x-hl7-cda-level-one');
