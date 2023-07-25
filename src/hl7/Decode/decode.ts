import { string } from 'typescript-json-decoder';
import { eventRegex, settingsFromMSH } from '../utils/HL7Settings.ts';
import { decodeRequiredSegment } from '../utils/DecoderUtils.ts';
import { decodeMessageHeader } from './Segments/DecodeMessageHeader.ts';
import { decodeACK } from './Events/DecodeACK.ts';
import { decodeADT_A47 } from './Events/DecodeADT_A47.ts';
import { decodeADT_A28 } from './Events/DecodeADT_A28.ts';
import { decodeADT_A01 } from './Events/DecodeADT_A01.ts';
import { decodeADT_A05 } from './Events/DecodeADT_A05.ts';
import { HL7Request } from '../Types/Request.ts';
import { decodeADT_A31 } from './Events/DecodeADT_A31.ts';

const decodeHL7Request = (value: unknown): HL7Request => {
    const strValue = string(value);
    const data = strValue.split(eventRegex);
    const MSH = decodeRequiredSegment('MSH', decodeMessageHeader, data);
    const settings = settingsFromMSH(MSH);
    switch (MSH.messageType.messageCode) {
        case 'ADT': {
            switch (MSH.messageType.triggerEvent) {
                case 'A01':
                    return decodeADT_A01(MSH, data, settings);
                case 'A05':
                    return decodeADT_A05(MSH, data, settings);
                case 'A28':
                    return decodeADT_A28(MSH, data, settings);
                case 'A31':
                    return decodeADT_A31(MSH, data, settings);
                case 'A47':
                    return decodeADT_A47(MSH, data, settings);
                default:
                    throw Error('Not implemented');
            }
        }
        default:
            throw Error('Not implemented');
    }
};

export const decodeHL7Message = (value: string) => {
    const requests = value.match(/(?<=\v)(.+)(?=\x1C\r)/gs);

    if (!requests) {
        throw new Error('NO PROPER REQUEST');
    }

    return requests.map(decodeHL7Request);
};
