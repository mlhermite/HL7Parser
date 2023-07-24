import { Datetime } from '../Tables/Datetime.ts';
import { CodedWithExceptions } from './CodedWithExceptions.ts';
import { HierarchicDesignator } from './HierarchicDesignator.ts';
import { FamilyName } from './FamilyName.ts';
import { NameType } from '../Tables/NameType.ts';
import { CheckDigitScheme } from '../Tables/CheckDigitScheme.ts';
import { IdentifierType } from '../Tables/IdentifierType.ts';
import { NameAddressRepresentation } from '../Tables/NameAddressRepresentation.ts';
import { NameAssemblyOrder } from '../Tables/NameAssemblyOrder.ts';
import { SecurityCheckScheme } from '../Tables/SecurityCheckScheme.ts';

/**
 *
 * HL7 v2.8 - XCN - Extended Composite Id Number And Name For Persons
 *
 * Note: Replaces CN data type as of v 2.3.
 *
 * This data type is used extensively appearing in the PV1, ORC, RXO, RXE, OBR and SCH segments, as well as others, where there is a need to specify the ID number and name of a person.
 *
 * Example without assigning authority and assigning facility:
 * |1234567^Everyman^Adam^A^III^DR^PHD^ADT01^^L^4^M11^MR|
 *
 * Examples with assigning authority and assigning facility:
 *
 * Dr. Harold Hippocrates’ provider ID was assigned by the Provider Master and was first issued at Good Health Hospital within the Community Health and Hospitals System. Since IS table values (first component of the HD) were not used for assigning authority and assigning facility, components 2 and 3 of the HD data type are populated and demoted to sub-components as follows:
 * 12188^Hippocrates^Harold^H^IV^Dr^MD^^&Provider Master.Community Health and Hospitals&L^L^9^M10^DN^&Good Health Hospital.Community Health and Hospitals&L^A
 *
 * Ludwig van Beethoven's medical record number was assigned by the Master Patient Index and was first issued at Fairview Hospital within the University Hospitals System.
 * 10535^van Beethoven&van^Ludwig^A^III^Dr^PHD^^&MPI.Community Health and Hospitals&L^L^3^M10^MR^& Good Health Hospital.Community Health and Hospitals&L^A
 *
 * XCN.1 -  Person Identifier  ---------------  0  ST   Cond       Single
 * XCN.2 -  Family Name  ---------------------  0  FN   C          Single
 * XCN.3 -  Given Name  ----------------------  0  ST   Optional   Single
 * XCN.4 -  Second And Further Names  --------  0  ST   Optional   Single
 * XCN.5 -  Suffix (e.g., Jr Or Iii)  --------  0  ST   Optional   Single
 * XCN.6 -  Prefix (e.g., Dr)  ---------------  0  ST   Optional   Single
 * XCN.7 -  Degree (e.g., Md)  ---------------  0  ST   Withdrawn  Single
 * XCN.8 -  Source Table  --------------------  0  CWE  Optional   Single
 * XCN.9 -  Assigning Authority  -------------  0  HD   Cond       Single
 * XCN.10 - Name Type Code  ------------------  5  ID   Cond       Single
 * XCN.11 - Identifier Check Digit  ----------  4  ST   Optional   Single
 * XCN.12 - Check Digit Scheme  --------------  3  ID   Cond       Single
 * XCN.13 - Identifier Type Code  ------------  5  ID   Cond       Single
 * XCN.14 - Assigning Facility  --------------  0  HD   Optional   Single
 * XCN.15 - Name Representation Code  --------  1  ID   Optional   Single
 * XCN.16 - Name Context  --------------------  0  CWE  Optional   Single
 * XCN.17 - Name Validity Range  -------------  0  ST   Withdrawn  Single
 * XCN.18 - Name Assembly Order  -------------  1  ID   Optional   Single
 * XCN.19 - Effective Date  ------------------  0  DTM  Optional   Single
 * XCN.20 - Expiration Date  -----------------  0  DTM  Optional   Single
 * XCN.21 - Professional Suffix  -------------  0  ST   Optional   Single
 * XCN.22 - Assigning Jurisdiction  ----------  0  CWE  Cond       Single
 * XCN.23 - Assigning Agency Or Department  --  0  CWE  Cond       Single
 * XCN.24 - Security Check  ------------------  0  ST   Optional   Single
 * XCN.25 - Security Check Scheme  -----------  3  ID   Optional   Single
 *
 */
export type ExtendedCompositeIdName = {
  personIdentifier?: string; // XCN.1
  familyName?: FamilyName; // XCN.2
  givenName?: string; // XCN.3
  secondAndFurtherNames?: string; // XCN.4
  suffix?: string; // XCN.5
  prefix?: string; // XCN.6
  degree?: string; // XCN.7
  sourceTable?: CodedWithExceptions; // XCN.8
  assigningAuthority?: HierarchicDesignator; // XCN.9
  nameTypeCode?: NameType; // XCN.10
  identifierCheckDigit?: string; // XCN.11
  checkDigitScheme?: CheckDigitScheme; // XCN.12
  identifierTypeCode?: IdentifierType; // XCN.13
  assigningFacility?: HierarchicDesignator; // XCN.14
  nameRepresentationCode?: NameAddressRepresentation; // XCN.15
  nameContext?: CodedWithExceptions; // XCN.16
  nameValidityRange?: string; // XCN.17
  nameAssemblyOrder?: NameAssemblyOrder; // XCN.18
  effectiveDate?: Datetime; // XCN.19
  expirationDate?: Datetime; // XCN.20
  professionalSuffix?: string; // XCN.21
  assigningJurisdiction?: CodedWithExceptions; // XCN.22
  assigningAgencyOrDepartment?: CodedWithExceptions; // XCN.23
  securityCheck?: string; // XCN.24
  securityCheckScheme?: SecurityCheckScheme; // XCN.25
};
