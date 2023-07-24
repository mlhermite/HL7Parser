import { HierarchicDesignator } from './HierarchicDesignator.ts';
import { CodedWithExceptions } from './CodedWithExceptions.ts';
import { DateValue } from '../Tables/DateValue.ts';
import { CheckDigitScheme } from '../Tables/CheckDigitScheme.ts';
import { IdentifierType } from '../Tables/IdentifierType.ts';
import { SecurityCheckScheme } from '../Tables/SecurityCheckScheme.ts';

/**
 *
 * HL7 v2.8 - CX - Extended Composite Id With Check Digit
 *
 * This data type is used for specifying an identifier with its associated administrative detail.
 *
 * Note: The check digit and check digit scheme are null if ID is alphanumeric.
 *
 * Example:
 * |1234567^4^M11^ADT01^MR^University Hospital|
 *
 *
 * CX.1 -  Id Number  ------------------------  0  ST   Required  Single
 * CX.2 -  Identifier Check Digit  -----------  0  ST   Optional  Single
 * CX.3 -  Check Digit Scheme  ---------------  3  ID   Optional  Single
 * CX.4 -  Assigning Authority  --------------  0  HD   Cond      Single
 * CX.5 -  Identifier Type Code  -------------  5  ID   Required  Single
 * CX.6 -  Assigning Facility  ---------------  0  HD   Optional  Single
 * CX.7 -  Effective Date  -------------------  0  DT   Optional  Single
 * CX.8 -  Expiration Date  ------------------  0  DT   Optional  Single
 * CX.9 -  Assigning Jurisdiction  -----------  0  CWE  Cond      Single
 * CX.10 - Assigning Agency Or Department  ---  0  CWE  Cond      Single
 * CX.11 - Security Check  -------------------  0  ST   Optional  Single
 * CX.12 - Security Check Scheme  ------------  3  ID   Optional  Single
 */
export type ExtendedCompositeIdWithCheckDigit = {
  idNumber: string; // CX.1
  identifierCheckDigit?: string; // CX.2
  checkDigitScheme?: CheckDigitScheme; // CX.3
  assigningAuthority?: HierarchicDesignator; // CX.4
  identifierTypeCode: IdentifierType; // CX.5
  assigningFacility?: HierarchicDesignator; // CX.6
  effectiveDate?: DateValue; // CX.7
  expirationDate?: DateValue; // CX.8
  assigningJurisdiction?: CodedWithExceptions; // CX.9
  assigningAgencyOrDepartment?: CodedWithExceptions; // CX.10
  securityCheck?: string; // CX.11
  securityCheckScheme?: SecurityCheckScheme; // CX.12
};
