/**
 *
 * HL7 v2.8 - SAD - Street Address
 *
 * This data type specifies an entity's street address and associated detail.
 *
 * Note: Appears ONLY in the XAD data type
 *
 * SAD.1 - Street Or Mailing Address  --  0  ST  Optional  Single
 * SAD.2 - Street Name  ----------------  0  ST  Optional  Single
 * SAD.3 - Dwelling Number  ------------  0  ST  Optional  Single
 */
export type StreetAddress = {
  streetOrMailingAddress?: string; // SAD.1
  streetName?: string; // SAD.2
  dwellingNumber?: string; // SAD.3
};
