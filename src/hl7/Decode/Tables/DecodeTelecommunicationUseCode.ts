import { stringUnion } from '../../utils/DecoderUtils.ts';
import { TelecommunicationUseCode } from '../../Types/Tables/TelecommunicationUseCode.ts';

export const decodeTelecommunicationUseCode = stringUnion<TelecommunicationUseCode>('ASN', 'BPN', 'EMR', 'NET', 'ORN', 'PRN', 'PRS', 'VHN', 'WPN');
