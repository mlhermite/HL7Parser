import { decodeADT_A01 } from './DecodeADT_A01.ts';
import { ADT_A31 } from '../../Types/Events/ADT_A31.ts';
import { MessageHeader } from '../../Types/Segments/MessageHeader.ts';
import { HL7Settings } from '../../utils/HL7Settings.ts';

export const decodeADT_A31: (MSH: MessageHeader, data: string[], settings: HL7Settings) => ADT_A31 = decodeADT_A01;
