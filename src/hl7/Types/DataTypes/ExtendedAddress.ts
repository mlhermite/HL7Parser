import { CodedWithExceptions } from './CodedWithExceptions.ts';
import { Datetime } from '../Tables/Datetime.ts';
import { EntityIdentifier } from './EntityIdentifier.ts';
import { YesNoIndicator } from '../Tables/YesNoIndicator.ts';
import { NameAddressRepresentation } from '../Tables/NameAddressRepresentation.ts';
import { CountryCode } from '../Tables/CountryCode.ts';
import { StreetAddress } from './StreetAddress.ts';
import { AddressType } from '../Tables/AddressType.ts';
import { AddressUsage } from '../Tables/AddressUsage.ts';

/**
 *
 * This data type specifies the address of a person, place or organization plus associated information.
 *
 * Note: Replaces the AD data type as of v2.3.
 *
 * Example of usage for US:
 * |1000 Hospital Lane^Ste. 123^Ann Arbor ^MI^99999^USA^B^^WA^|
 * This would be formatted for postal purposes as
 * 1000 Hospital Lane
 * Ste. 123
 * Ann Arbor MI 99999
 *
 * Example of usage for Australia:
 * |14th Floor^1000 Hospital Lane^Sidney^QLD^9999|
 *
 * This would be formatted for postal purposes using the same rules as for the American example as
 * 14th Floor
 * 1000 Hospital Lane
 * Sidney QLD 9999
 *
 * International note: Countries typically have a standard method of formatting addresses. This data type does not specify the formatting usages, only the components of a postal address.
 *
 * XAD.1 -  Street Address  ----------------  0  SAD  Optional   Single
 * XAD.2 -  Other Designation  -------------  0  ST   Optional   Single
 * XAD.3 -  City  --------------------------  0  ST   Optional   Single
 * XAD.4 -  State Or Province  -------------  0  ST   Optional   Single
 * XAD.5 -  Zip Or Postal Code  ------------  0  ST   Optional   Single
 * XAD.6 -  Country  -----------------------  3  ID   Optional   Single
 * XAD.7 -  Address Type  ------------------  3  ID   Cond       Single
 * XAD.8 -  Other Geographic Designation  --  0  ST   Optional   Single
 * XAD.9 -  County/Parish Code  ------------  0  CWE  Optional   Single
 * XAD.10 - Census Tract  ------------------  0  CWE  Optional   Single
 * XAD.11 - Address Representation Code  ---  1  ID   Optional   Single
 * XAD.12 - Address Validity Range  --------  0  ST   Withdrawn  Single
 * XAD.13 - Effective Date  ----------------  0  DTM  Optional   Single
 * XAD.14 - Expiration Date  ---------------  0  DTM  Optional   Single
 * XAD.15 - Expiration Reason  -------------  0  CWE  Optional   Single
 * XAD.16 - Temporary Indicator  -----------  1  ID   Optional   Single
 * XAD.17 - Bad Address Indicator  ---------  1  ID   Optional   Single
 * XAD.18 - Address Usage  -----------------  1  ID   Optional   Single
 * XAD.19 - Addressee  ---------------------  0  ST   Optional   Single
 * XAD.20 - Comment  -----------------------  0  ST   Optional   Single
 * XAD.21 - Preference Order  --------------  0  NM   Optional   Single
 * XAD.22 - Protection Code  ---------------  0  CWE  Optional   Single
 * XAD.23 - Address Identifier  ------------  0  EI   Optional   Single
 */
export type ExtendedAddress = {
  streetAddress?: StreetAddress; // XAD.1
  otherDesignation?: string; // XAD.2
  city?: string; // XAD.3
  stateOrProvince?: string; // XAD.4
  zipOrPostalCode?: string; // XAD.5
  country?: CountryCode; // XAD.6
  addressType?: AddressType; // XAD.7
  otherGeographicDesignation?: string; // XAD.8
  countyCode?: CodedWithExceptions; // XAD.9
  censusTract?: CodedWithExceptions; // XAD.10
  addressRepresentationCode?: NameAddressRepresentation; // XAD.11
  addressValidityRange?: string; // XAD.12
  effectiveDate?: Datetime; // XAD.13
  expirationDate?: Datetime; // XAD.14
  expirationReason?: CodedWithExceptions; // XAD.15
  temporaryIndicator?: YesNoIndicator; // XAD.16
  badAddressIndicator?: YesNoIndicator; // XAD.17
  addressUsage?: AddressUsage; // XAD.18
  addressee?: string; // XAD.19
  comment?: string; // XAD.20
  preferenceOrder?: number; // XAD.21
  protectionCode?: CodedWithExceptions; // XAD.22
  addressIdentifier?: EntityIdentifier; // XAD.23
};
