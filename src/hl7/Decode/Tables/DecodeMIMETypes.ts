import { stringUnion } from '../../utils/DecoderUtils.ts';
import { MIMETypes } from '../../Types/Tables/MIMETypes.ts';

export const decodeMIMETypes = stringUnion<MIMETypes>('application', 'audio', 'image', 'model', 'multipart', 'text', 'video');
