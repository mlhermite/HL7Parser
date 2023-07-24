import { encodeACK } from './Events/EncodeACK.ts';
import { ACK } from '../Types/Events/ACK.ts';

const encodeHL7Request = (ACK: ACK) => {
  return encodeACK(ACK);
};

export const encodeHL7Message = (ACK: ACK) => {
  return `\v${encodeHL7Request(ACK)}\x1C\\r`;
};
