import { HierarchicDesignator } from './HierarchicDesignator.ts';
import { CodedWithExceptions } from './CodedWithExceptions.ts';
import { IdentifierType } from '../Tables/IdentifierType.ts';
import { NameAddressRepresentation } from '../Tables/NameAddressRepresentation.ts';

/**
 * This data type is used in fields (e.g., PV2-23, NK1-13, PD1-3, OBR-44) to specify the name and ID number of an organization.
 *
 * Example 1:
 * The ID for Good Health Hospital was assigned by the Community Health and Hospitals enterprise’s Hospital Master and was first issued at the Central Offices.
 * Good Health Hospital^L^716^9^M10^&Hospital Master.Community Health and Hospitals&L^XX^&Central Offices.Community Health and Hospitals&L^A
 *
 * Example 2:
 * Good Health Hospital has another ID that was issued by CMS. Assigning Authority, CMS, values only the first HD component, an IS data type and assigning facility is not relevant. This information might be transmitted accordingly:
 * Good Health Hospital^L^4544^3^M10^CMS^XX^^A
 *
 * <pre>
 * XON.1 - Organization Name  -----------  0  ST   Optional   Single
 * XON.2 - Organization Name Type Code  -  0  CWE  Optional   Single
 * XON.3 - Id Number  -------------------  0  ST   Withdrawn  Single
 * XON.4 - Identifier Check Digit  ------  0  ST   Withdrawn  Single
 * XON.5 - Check Digit Scheme  ----------  3  ST   Withdrawn  Single
 * XON.6 - Assigning Authority  ---------  0  HD   Optional   Single
 * XON.7 - Identifier Type Code  --------  5  ID   Optional   Single
 * XON.8 - Assigning Facility  ----------  0  HD   Optional   Single
 * XON.9 - Name Representation Code  ----  1  ID   Optional   Single
 * XON.10 - Organization Identifier  ----  0  ST   Optional   Single
 * </pre>
 */
export type ExtendedOrganizationIdentifier = {
  organizationName?: string;
  organizationNameTypeCode?: CodedWithExceptions;
  idNumber?: string;
  identifierCheckDigit?: string;
  checkDigitScheme?: string;
  assigningAuthority?: HierarchicDesignator;
  identifierTypeCode?: IdentifierType;
  assigningFacility?: HierarchicDesignator;
  nameRepresentationCode?: NameAddressRepresentation;
  organizationIdentifier?: string;
};
