/**
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * <pre>
 * AL  Always
 * ER  Error/reject conditions only
 * NE  Never
 * SU  Successful completion only
 * </pre>
 */
export type AcknowledgmentConditions = "AL" | "ER" | "NE" | "SU";
