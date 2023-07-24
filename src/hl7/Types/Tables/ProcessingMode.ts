/**
 *
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * <pre>
 * A  Archive
 * I  Initial load
 * Not present  Not present (the default, meaning current processing)
 * R  Restore from archive
 * T  Current processing, transmitted at intervals (scheduled or on demand)
 * </pre>
 */
export type ProcessingMode = "A" | "I" | "Not present" | "R" | "T";
