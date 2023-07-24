/**
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * <pre>
 * ASN  Answering Service Number
 * BPN  Beeper Number
 * EMR  Emergency Number
 * NET  Network (email) Address
 * ORN  Other Residence Number
 * PRN  Primary Residence Number
 * PRS  Personal
 * VHN  Vacation Home Number
 * WPN  Work Number
 * </pre>
 */
export type TelecommunicationUseCode =
  | "ASN"
  | "BPN"
  | "EMR"
  | "NET"
  | "ORN"
  | "PRN"
  | "PRS"
  | "VHN"
  | "WPN";
