/**
 *
 * HL7 v2.8 - FN - Family Name
 *
 * This data type allows full specification of the surname of a person. Where appropriate, it differentiates the person's own surname from that of the person's partner or spouse, in cases where the person's name may contain elements from either name. It also permits messages to distinguish the surname prefix (such as "van" or "de") from the surname root.
 *
 * Note: Appears ONLY in the PPN, XCN and XPN.
 *
 * FN.1 - Surname  -----------------------------  0  ST  Required  Single
 * FN.2 - Own Surname Prefix  ------------------  0  ST  Optional  Single
 * FN.3 - Own Surname  -------------------------  0  ST  Optional  Single
 * FN.4 - Surname Prefix From Partner/Spouse  --  0  ST  Optional  Single
 * FN.5 - Surname From Partner/Spouse  ---------  0  ST  Optional  Single
 */
export type FamilyName = {
  surname: string;
  ownSurnamePrefix?: string;
  ownSurname?: string;
  surnamePrefixFromPartner?: string;
  surnameFromPartner?: string;
};
