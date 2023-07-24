import { stringUnion } from '../../utils/DecoderUtils.ts';
import { YesNoIndicator } from '../../Types/Tables/YesNoIndicator.ts';

export const decodeYesNoIndicator = stringUnion<YesNoIndicator>('Y', 'N');
