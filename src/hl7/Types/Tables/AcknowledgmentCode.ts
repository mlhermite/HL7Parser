/**
 *
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * <pre>
 * AA  Original mode: Application Accept - Enhanced mode: Application acknowledgment: Accept
 * AE  Original mode: Application Error - Enhanced mode: Application acknowledgment: Error
 * AR  Original mode: Application Reject - Enhanced mode: Application acknowledgment: Reject
 * CA  Enhanced mode: Accept acknowledgment: Commit Accept
 * CE  Enhanced mode: Accept acknowledgment: Commit Error
 * CR  Enhanced mode: Accept acknowledgment: Commit Reject
 * </pre>
 */
export type AcknowledgmentCode = "AA" | "AE" | "AR" | "CA" | "CE" | "CR";
