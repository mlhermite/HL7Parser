/**
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * <pre>
 * CLIA  Clinical Laboratory Improvement Amendments. Allows for the ability to designate organization identifier as a "CLIA" assigned number (for labs)
 * CLIP  Clinical laboratory Improvement Program. Allows for the ability to designate organization identifier as a "CLIP" assigned number (for labs).Â  Used by US Department of Defense.
 * DNS  An Internet host name, in accordance with RFC 1035; or an IP address. Either in ASCII or as integers, with periods between components ("dotted" notation).
 * EUI64  IEEE 64-bit Extended Unique Identifier comprises a 24-bit company identifier and a 40-bit instance identifier. The value shall be formatted as 16 ASCII HEX digits, for example, "AABBCC1122334455". The 24-bit company identifier, formally known as
 * GUID  Same as UUID.
 * HCD  The CEN Healthcare Coding Scheme Designator
 * HL7  HL7 registration schemes
 * ISO  An International Standards Organization Object Identifier (OID), in accordance with ISO/IEC 8824. Formatted as decimal digits separated by periods; recommended limit of 64 characters
 * L,M,N  Locally defined coding entity identifier.
 * Random  Usually a base64 encoded string of random bits.<p>Note: Random IDs are typically used for instance identifiers, rather than an identifier of an Assigning Authority that issues instance identifiers
 * URI  Uniform Resource Identifier
 * UUID  The DCE Universal Unique Identifier, in accordance with RFC 4122. Recommended format is 32 hexadecimal digits separated by hyphens, in the digit grouping 8-4-4-4-12
 * x400  An X.400 MHS identifier. Recommended format is in accordance with RFC 1649
 * x500  An X.500 directory name
 * </pre>
 */
export type UniversalIDType =
  | "CLIA"
  | "CLIP"
  | "DNS"
  | "EUI64"
  | "GUID"
  | "HCD"
  | "HL7"
  | "ISO"
  | "L"
  | "M"
  | "N"
  | "Random"
  | "URI"
  | "UUID"
  | "x400"
  | "x500";
