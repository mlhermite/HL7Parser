import { Datetime } from '../Tables/Datetime.ts';
import { CodingSystem } from '../Tables/CodingSystem.ts';

/**
 * Specifies a coded element and its associated detail. The CWE data type is used when 1) more than one table may be applicable or 2) the specified HL7 or externally defined table may be extended with local values or 3) when text is in place, the code may be omitted.
 *
 * The presence of two sets of equivalent codes in this data type is semantically different from a repetition of a CWE-type field. With repetition, several distinct codes (with distinct meanings) may be transmitted.
 *
 * Usage Notes: The CWE data type should be used for coded fields with one or more of the following characteristics:
 * - The identifier code (CWE.1) component is optional
 * - The set of allowable values from which the identifier code is drawn may be extended on a site-specific basis
 * - An exception identifier code may be encountered; that is, a code that is not defined in the value set (either model or site-extended).
 *
 * This is in contrast to the CNE data type, which requires a code from a non-extendable value set be sent in the identifier code component (CNE.1) in all cases (except, of course, if the entire field is empty and defined as optional at the segment level).
 *
 * As of v2.7 a third tuple, formerly known as triplet, has been added to the CWE data type. Additionally, 3 new components were added to each tuple such that each tuple now has a total of 7 components. The Original Text component applies to the CWE as a whole.
 *
 * <pre>
 * CWE.1 - Identifier  ---------------------------------  0   ST   Optional     Single
 * CWE.2 - Text  ---------------------------------------  0   ST   Optional     Single
 * CWE.3 - Name Of Coding System  ----------------------  12  ID   Conditional  Single
 * CWE.4 - Alternate Identifier  -----------------------  0   ST   Optional     Single
 * CWE.5 - Alternate Text  -----------------------------  0   ST   Optional     Single
 * CWE.6 - Name Of Alternate Coding System  ------------  12  ID   Conditional  Single
 * CWE.7 - Coding System Version Id  -------------------  0   ST   Conditional  Single
 * CWE.8 - Alternate Coding System Version Id  ---------  0   ST   Optional     Single
 * CWE.9 - Original Text  ------------------------------  0   ST   Optional     Single
 * CWE.10 - Second Alternate Identifier  ---------------  0   ST   Optional     Single
 * CWE.11 - Second Alternate Text  ---------------------  0   ST   Optional     Single
 * CWE.12 - Name Of Second Alternate Coding System  ----  12  ID   Conditional  Single
 * CWE.13 - Second Alternate Coding System Version Id  -  0   ST   Optional     Single
 * CWE.14 - Coding System Oid  -------------------------  0   ST   Conditional  Single
 * CWE.15 - Value Set Oid  -----------------------------  0   ST   Optional     Single
 * CWE.16 - Value Set Version Id  ----------------------  0   DTM  Conditional  Single
 * CWE.17 - Alternate Coding System Oid  ---------------  0   ST   Conditional  Single
 * CWE.18 - Alternate Value Set Oid  -------------------  0   ST   Optional     Single
 * CWE.19 - Alternate Value Set Version Id  ------------  0   DTM  Conditional  Single
 * CWE.20 - Second Alternate Coding System Oid  --------  0   ST   Conditional  Single
 * CWE.21 - Second Alternate Value Set Oid  ------------  0   ST   Optional     Single
 * CWE.22 - Second Alternate Value Set Version Id  -----  0   DTM  Conditional  Single
 * </pre>
 */
export type CodedWithExceptions = {
  identifier?: string;
  text?: string;
  nameOfCodingSystem?: CodingSystem;
  alternateIdentifier?: string;
  alternateText?: string;
  nameOfAlternateCodingSystem?: CodingSystem;
  codingSystemVersionId?: string;
  alternateCodingSystemVersionId?: string;
  originalText?: string;
  secondAlternateIdentifier?: string;
  secondAlternateText?: string;
  nameOfSecondAlternateCodingSystem?: CodingSystem;
  secondAlternateCodingSystemVersionId?: string;
  codingSystemOid?: string;
  valueSetOid?: string;
  valueSetVersionId?: Datetime;
  alternateCodingSystemOid?: string;
  alternateValueSetOid?: string;
  alternateValueSetVersionId?: Datetime;
  secondAlternateCodingSystemOid?: string;
  secondAlternateValueSetOid?: string;
  secondAlternateValueSetVersionId?: Datetime;
};
