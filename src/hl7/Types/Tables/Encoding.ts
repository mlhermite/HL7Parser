/**
 *
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * <pre>
 * A  No encoding - data are displayable ASCII characters.
 * Base64  Encoding as defined by MIME (Multipurpose Internet Mail Extensions) standard RFC 1521. Four consecutive ASCII characters represent three consecutive octets of binary data. Base64 utilizes a 65-character subset of US-ASCII, consisting of both the upper and
 * Hex  Hexadecimal encoding - consecutive pairs of hexadecimal digits represent consecutive single octets.
 * </pre>
 */
export type Encoding = "A" | "Base64" | "Hex";
