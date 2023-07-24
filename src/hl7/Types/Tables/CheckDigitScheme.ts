/**
 *
 * HL7 v2.8 - 0061 - Check Digit Scheme
 *
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * BCV  Bank Card Validation Number
 * ISO  ISO 7064: 1983
 * M10  Mod 10 algorithm
 * M11  Mod 11 algorithm
 * NPI  Check digit algorithm in the US National Provider Identifier
 */
export type CheckDigitScheme = 'BCV' | 'ISO' | 'M10' | 'M11' | 'NPI';
