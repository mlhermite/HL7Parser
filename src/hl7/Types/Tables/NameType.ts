/**
 *
 * HL7 v2.8 - 0200 - Name Type
 *
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * A  Assigned
 * B  Birth name
 * BAD  Bad Name
 * C  Adopted Name
 * D  Customary Name
 * I  Licensing Name
 * K  Business name
 * L  Official Registry Name
 * M  Maiden Name
 * MSK  Masked
 * N  Nickname
 * NAV  Temporarily Unavailable
 * NB  Newborn Name
 * NOUSE  No Longer To Be Used
 * P  Name of Partner/Spouse
 * R  Registered Name
 * REL  Religious
 * S  Pseudonym
 * T  Indigenous/Tribal
 * TEMP  Temporary Name
 * U  Unknown
 */
export type NameType =
  | 'A'
  | 'B'
  | 'BAD'
  | 'C'
  | 'D'
  | 'I'
  | 'K'
  | 'L'
  | 'M'
  | 'MSK'
  | 'N'
  | 'NAV'
  | 'NB'
  | 'NOUSE'
  | 'P'
  | 'R'
  | 'REL'
  | 'S'
  | 'T'
  | 'TEMP'
  | 'U';
