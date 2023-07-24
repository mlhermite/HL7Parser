/**
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * <pre>
 * <null>  This is the default, indicating that there is no character set switching occurring in this message.
 * 2.3  The character set switching mode specified in HL7 2.5, section 2.7.2 and section 2.A.46, "XPN - extended person name".
 * ISO 2022-1994  This standard is titled "Information Technology - Character Code Structure and Extension Technique".
 * </pre>
 */
export type AlternateCharacterSetHandlingScheme = "ISO 2022-1994" | "2.3";
