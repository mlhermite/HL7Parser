import { DecoderFunction, string } from 'typescript-json-decoder';
import { decodeADT_A01 } from './DecodeADT_A01.ts';
import { ADT_A28 } from '../../Types/Events/ADT_A28.ts';
import { MessageHeader } from '../../Types/Segments/MessageHeader.ts';
import { HL7Settings } from '../../utils/HL7Settings.ts';
import { ADT_A01 } from '../../Types/Events/ADT_A01.ts';

export const decodeADT_A28: (MSH: MessageHeader, data: string[], settings: HL7Settings) => ADT_A28 = decodeADT_A01;
