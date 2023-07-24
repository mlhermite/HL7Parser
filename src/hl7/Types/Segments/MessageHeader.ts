import { AcknowledgmentConditions } from '../Tables/AcknowledgmentConditions.ts';
import { ExtendedOrganizationIdentifier } from '../DataTypes/ExtendedOrganizationIdentifier.ts';
import { CodedWithExceptions } from '../DataTypes/CodedWithExceptions.ts';
import { EntityIdentifier } from '../DataTypes/EntityIdentifier.ts';
import { AlternateCharacterSetHandlingScheme } from '../Tables/AlternateCharacterSetHandlingScheme.ts';
import { AlternateCharacterSets } from '../Tables/AlternateCharacterSets.ts';
import { CountryCode } from '../Tables/CountryCode.ts';
import { Datetime } from '../Tables/Datetime.ts';
import { MessageType } from '../DataTypes/MessageType.ts';
import { HierarchicDesignator } from '../DataTypes/HierarchicDesignator.ts';
import { ProcessingType } from '../DataTypes/ProcessingType.ts';
import { VersionIdentifier } from '../DataTypes/VersionIdentifier.ts';

/**
 *
 * HL7 v2.8 - MSH - Message Header
 *
 * The MSH segment defines the intent, source, destination, and some specifics of the syntax of a message.
 *
 * <pre>
 * MSH.1  - Field Separator  -----------------------  1  --  ST  --  Required - Single
 * </pre>
 * This field contains the separator between the segment ID and the first real field, MSH-2 Encoding Characters. As such it serves as the separator and defines the character to be used as a separator for the rest of the message. Recommended value is | (ASCII 124).
 * <pre>
 * MSH.2  - Encoding Characters  -------------------  5  --  ST  --  Required - Single
 * MSH.3  - Sending Application  -------------------  0  --  HD  --  Optional - Single
 * MSH.4  - Sending Facility  ----------------------  0  --  HD  --  Optional - Single
 * MSH.5  - Receiving Application  -----------------  0  --  HD  --  Optional - Single
 * MSH.6  - Receiving Facility  --------------------  0  --  HD  --  Optional - Single
 * MSH.7  - Date/Time Of Message  ------------------  0  --  DTM  -  Required - Single
 * MSH.8  - Security  ------------------------------  0  --  ST  --  Optional - Single
 * MSH.9  - Message Type  --------------------------  0  --  MSG  -  Required - Single
 * MSH.10 - Message Control Id  --------------------  199 -  ST  --  Required - Single
 * MSH.11 - Processing Id  -------------------------  0  --  PT  --  Required - Single
 * MSH.12 - Version Id  ----------------------------  0  --  VID  -  Required - Single
 * MSH.13 - Sequence Number  -----------------------  0  --  NM  --  Optional - Single
 * MSH.14 - Continuation Pointer  ------------------  0  --  ST  --  Optional - Single
 * MSH.15 - Accept Acknowledgment Type  ------------  2  --  ID  --  Optional - Single
 * MSH.16 - Application Acknowledgment Type  -------  2  --  ID  --  Optional - Single
 * MSH.17 - Country Code  --------------------------  3  --  ID  --  Optional - Single
 * MSH.18 - Character Set  -------------------------  15  -  ID  --  Optional - Multiple
 * MSH.19 - Principal Language Of Message  ---------  0  --  CWE  -  Optional - Single
 * MSH.20 - Alternate Character Set Handling Scheme   13  -  ID  --  Optional - Single
 * MSH.21 - Message Profile Identifier  ------------  0  --  EI  --  Optional - Multiple
 * MSH.22 - Sending Responsible Organization  ------  0  --  XON  -  Optional - Single
 * MSH.23 - Receiving Responsible Organization  ----  0  --  XON  -  Optional - Single
 * MSH.24 - Sending Network Address  ---------------  0  --  HD  --  Optional - Single
 * MSH.25 - Receiving Network Address  -------------  0  --  HD  --  Optional - Single
 * </pre>
 */
export type MessageHeader = {
  fieldSeparator: string; // MSH.1
  encodingCharacters: string; // MSH.2
  sendingApplication?: HierarchicDesignator; // MSH.3
  sendingFacility?: HierarchicDesignator; // MSH.4
  receivingApplication?: HierarchicDesignator; // MSH.5
  receivingFacility?: HierarchicDesignator; // MSH.6
  datetimeOfMessage: Datetime; // MSH.7
  security?: string; // MSH.8
  messageType: MessageType; // MSH.9
  messageControl: string; // MSH.10
  processingID: ProcessingType; // MSH.11
  versionID: VersionIdentifier; // MSH.12
  sequenceNumber?: number; // MSH.13
  continuationPointer?: string; // MSH.14
  acceptAcknowledgmentType?: AcknowledgmentConditions; // MSH.15
  applicationAcknowledgmentType?: AcknowledgmentConditions; // MSH.16
  countryCode?: CountryCode; // MSH.17
  characterSet: AlternateCharacterSets[]; // MSH.18
  principalLanguageOfMessage?: CodedWithExceptions; // MSH.19
  alternateCharacterSetHandlingScheme?: AlternateCharacterSetHandlingScheme; // MSH.20
  messageProfileIdentifier?: EntityIdentifier[]; // MSH.21
  sendingResponsibleOrganization?: ExtendedOrganizationIdentifier; // MSH.22
  receivingResponsibleOrganization?: ExtendedOrganizationIdentifier; // MSH.23
  sendingNetworkAddress?: HierarchicDesignator; // MSH.24
  receivingNetworkAddress?: HierarchicDesignator; // MSH.25
};

/**
 *
 * Min length of an MSH segment
 *
 * Add MSH field at the beginning of segment
 * Remove fieldSeparator since it's the separator between MSH and encodingCharacters
 * Stops at the last required field:
 * <pre>
 * MSH.12 - Version Id  ----------------------------  0  --  VID  -  Required - Single
 * </pre>
 */
export const MSH_MIN_LENGTH = 12;
