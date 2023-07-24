import { decodeADT_A01 } from './DecodeADT_A01.ts';
import { DecoderFunction, string } from 'typescript-json-decoder';
import { ADT_A05 } from '../../Types/Events/ADT_A05.ts';
import { MessageHeader } from '../../Types/Segments/MessageHeader.ts';
import { HL7Settings } from '../../utils/HL7Settings.ts';
import { ADT_A28 } from '../../Types/Events/ADT_A28.ts';

export const decodeADT_A05: (MSH: MessageHeader, data: string[], settings: HL7Settings) => ADT_A05 = decodeADT_A01;
