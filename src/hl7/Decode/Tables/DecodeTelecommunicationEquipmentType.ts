import { stringUnion } from '../../utils/DecoderUtils.ts';
import { TelecommunicationEquipmentType } from '../../Types/Tables/TelecommunicationEquipmentType.ts';

export const decodeTelecommunicationEquipmentType = stringUnion<TelecommunicationEquipmentType>('BP', 'CP', 'FX', 'Internet', 'MD', 'PH', 'SAT', 'TDD', 'TTY', 'X.400');
