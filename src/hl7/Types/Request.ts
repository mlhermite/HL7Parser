import { ADT_A01 } from './Events/ADT_A01.ts';
import { ADT_A28 } from './Events/ADT_A28.ts';
import { ADT_A05 } from './Events/ADT_A05.ts';
import { ADT_A47 } from './Events/ADT_A47.ts';
import { ADT_A31 } from './Events/ADT_A31.ts';

export type ADTCreationRequest = ADT_A01 | ADT_A05 | ADT_A28 | ADT_A31;
export type ADTDeleteRequest = ADT_A47;

export type ADTRequest = ADTCreationRequest | ADTDeleteRequest;

export type HL7Request = ADTRequest;
