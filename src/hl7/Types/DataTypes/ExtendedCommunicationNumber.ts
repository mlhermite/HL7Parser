import { EntityIdentifier } from "./EntityIdentifier.ts";
import { CodedWithExceptions } from "./CodedWithExceptions.ts";
import { Datetime } from "../Tables/Datetime.ts";
import { TelecommunicationEquipmentType } from "../Tables/TelecommunicationEquipmentType.ts";
import { TelecommunicationUseCode } from "../Tables/TelecommunicationUseCode.ts";

/**
 *
 * Example 1: A Work fax number
 * ^WPN^FX^^^734^6777777
 *
 * Example 2: Telephone number with extension
 * ^WPN^PH^^^734^6777777^1
 *
 * Telephone number with internal code. In this example, assume that a corporation's telephone system supports a full external telephone number (area code and telephone number). It also supports internal dialing standards that assign a code to each facility and an extension to each telephone (which happens to be the last 4 digits of the external telephone number, by convention).
 *
 * XTN.1 -  Telephone Number  ---------------------  0  ST   Withdrawn    Single
 * XTN.2 -  Telecommunication Use Code  -----------  3  ID   Optional     Single
 * XTN.3 -  Telecommunication Equipment Type  -----  8  ID   Required     Single
 * XTN.4 -  Communication Address  ----------------  0  ST   Conditional  Single
 * XTN.5 -  Country Code  -------------------------  0  SNM  Optional     Single
 * XTN.6 -  Area/City Code  -----------------------  0  SNM  Optional     Single
 * XTN.7 -  Local Number  -------------------------  0  SNM  Conditional  Single
 * XTN.8 -  Extension  ----------------------------  0  SNM  Conditional  Single
 * XTN.9 -  Any Text  -----------------------------  0  ST   Optional     Single
 * XTN.10 - Extension Prefix  ---------------------  0  ST   Optional     Single
 * XTN.11 - Speed Dial Code  ----------------------  0  ST   Optional     Single
 * XTN.12 - Unformatted Telephone Number  ---------  0  ST   Conditional  Single
 * XTN.13 - Effective Start Date  -----------------  0  DTM  Optional     Single
 * XTN.14 - Expiration Date  ----------------------  0  DTM  Optional     Single
 * XTN.15 - Expiration Reason  --------------------  0  CWE  Optional     Single
 * XTN.16 - Protection Code  ----------------------  0  CWE  Optional     Single
 * XTN.17 - Shared Telecommunication Identifier  --  0  EI   Optional     Single
 * XTN.18 - Preference Order  ---------------------  0  NM   Optional     Single
 */
export type ExtendedCommunicationNumber = {
  telephoneNumber?: string; // XTN.1
  telecommunicationUseCode?: TelecommunicationUseCode; // XTN.2
  telecommunicationEquipmentType: TelecommunicationEquipmentType; // XTN.3
  communicationAddress?: string; // XTN.4
  countryCode?: string; // XTN.5
  areaCode?: string; // XTN.6
  localNumber?: string; // XTN.7
  extension?: string; // XTN.8
  anyText?: string; // XTN.9
  extensionPrefix?: string; // XTN.10
  speedDialCode?: string; // XTN.11
  unformattedTelephoneNumber?: string; // XTN.12
  effectiveStartDate?: Datetime; // XTN.13
  expirationDate?: Datetime; // XTN.14
  expirationReason?: CodedWithExceptions; // XTN.15
  protectionCode?: CodedWithExceptions; // XTN.16
  sharedTelecommunicationIdentifier?: EntityIdentifier; // XTN.17
  preferenceOrder?: number; // XTN.18
};
