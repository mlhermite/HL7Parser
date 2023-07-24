import { stringUnion } from '../../utils/DecoderUtils.ts';
import { SecurityCheckScheme } from '../../Types/Tables/SecurityCheckScheme.ts';

/**
 *
 * HL7 v2.8 - 0904 - Security Check Scheme
 *
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * BCV  Bank Card Validation Number
 * CCS  Credit Card Security code
 * VID  Version ID
 */
export const decodeSecurityCheckScheme = stringUnion<SecurityCheckScheme>('BCV', 'CCS', 'VID');
