import { FamilyName } from './FamilyName.ts';
import { CodedWithExceptions } from './CodedWithExceptions.ts';
import { Datetime } from '../Tables/Datetime.ts';
import { NameAssemblyOrder } from '../Tables/NameAssemblyOrder.ts';
import { NameAddressRepresentation } from '../Tables/NameAddressRepresentation.ts';
import { NameType } from '../Tables/NameType.ts';

/**
 * HL7 v2.8 - XPN - Extended Person Name
 *
 * XPN.1 -  Family Name  ---------------------  0  FN   Required   Single
 * XPN.2 -  Given Name  ----------------------  0  ST   Optional   Single
 * XPN.3 -  Second And Further Given Names  --  0  ST   Optional   Single
 * XPN.4 -  Suffix  --------------------------  0  ST   Optional   Single
 * XPN.5 -  Prefix  --------------------------  0  ST   Optional   Single
 * XPN.6 -  Degree  --------------------------  0  ST   Withdrawn  Single
 * XPN.7 -  Name Type Code  ------------------  5  ID   Optional   Single
 * XPN.8 -  Name Representation Code  --------  1  ID   Optional   Single
 * XPN.9 -  Name Context  --------------------  0  CWE  Optional   Single
 * XPN.10 - Name Validity Range  -------------  0  ST   Withdrawn  Single
 * XPN.11 - Name Assembly Order  -------------  1  ID   Optional   Single
 * XPN.12 - Effective Date  ------------------  0  DTM  Optional   Single
 * XPN.13 - Expiration Date  -----------------  0  DTM  Optional   Single
 * XPN.14 - Professional Suffix  -------------  0  ST   Optional   Single
 * XPN.15 - Called By  -----------------------  0  ST   Optional   Single
 */
export type ExtendedPersonName = {
  familyName: FamilyName; // XPN.1
  givenName?: string; // XPN.2
  secondAndFurtherNames?: string; // XPN.3
  suffix?: string; // XPN.4
  prefix?: string; // XPN.5
  degree?: string; // XPN.6
  nameTypeCode?: NameType; // XPN.7
  nameRepresentationCode?: NameAddressRepresentation; // XPN.8
  nameContext?: CodedWithExceptions; // XPN.9
  nameValidityRange?: string; // XPN.10
  nameAssemblyOrder?: NameAssemblyOrder; // XPN.11
  effectiveDate?: Datetime; // XPN.12
  expirationDate?: Datetime; // XPN.13
  professionalSuffix?: string; // XPN.14
  calledBy?: string; // XPN.15
};
