import {
  CodingSystem,
  CountryCode,
  EventType,
  MessageStructure,
  MessageType,
  ProcessingId,
  ProcessingMode,
  SI,
  UniversalIdType,
  VersionID,
} from "./HL7MessageValues.ts";
import { componentRegex } from "./utils/ParserUtils.ts";

export type ParserSettings = {
  fieldSeparator: string;
  componentSeparator: string;
  repetitionSeparator: string;
  escapeCharacter: string;
  subcomponentSeparator: string;
};

export type HierarchicDesignator = {
  namespaceId?: SI; // HD.1
  universalId?: string; // HD.2
  universalIdType?: UniversalIdType; // HD.3
};

export const encodeHierarchicDesignator = (value?: HierarchicDesignator) => {
  if (!value) {
    return "";
  }

  const values: string[] = [
    value.namespaceId ?? "", // HD.1
    value.universalId ?? "", // HD.2
    value.universalIdType ?? "", // HD.3
  ];
  return values.join("^");
};

export type Message = {
  messageType?: MessageType; // MSG.1
  triggerEvent?: EventType; // MSG.2
  messageStructure: MessageStructure; // MSG.3
};

export const encodeMessage = (value?: Message) => {
  if (!value) {
    return "";
  }

  const values: string[] = [
    value.messageType ?? "", // MSG.1
    value.triggerEvent ?? "", // MSG.2
    value.messageStructure ?? "", // MSG.3
  ];
  return values.join("^");
};

export const decodeMessage = (
  content: string,
  parserSettings: ParserSettings,
): Message => {
  const items = content.split(componentRegex(parserSettings));

  return {
    messageType: items[0] as MessageType,
    triggerEvent: items[1] as EventType,
    messageStructure: items[3] as MessageStructure,
  };
};

export type ProcessingType = {
  processingID?: ProcessingId; // PT.1
  processingMode?: ProcessingMode; // PT.2
};

export const encodeProcessingType = (value?: ProcessingType) => {
  if (!value) {
    return "";
  }

  const values: string[] = [
    value.processingID ?? "", // PT.1
    value.processingMode ?? "", // PT.2
  ];
  return values.join("^");
};

export const decodeProcessingType = (
  content: string,
  parserSettings: ParserSettings,
): ProcessingType => {
  const items = content.split(componentRegex(parserSettings));

  return {
    processingID: items[0] as ProcessingId,
    processingMode: items[1] as ProcessingMode,
  };
};

export type CodedElement = {
  identifier?: string; // CE.1
  text?: string; // CE.2
  nameOfCodingSystem?: CodingSystem; // CE.3
  alternateIdentifier?: string; // CE.4
  alternateText?: string; // CE.5
  nameOfAlternateCodingSystem?: CodingSystem; // CE.6
};

export const encodeCodedElement = (value?: CodedElement) => {
  if (!value) {
    return "";
  }

  const values: string[] = [
    value.identifier ?? "", // CE.1
    value.text ?? "", // CE.2
    value.nameOfCodingSystem ?? "", // CE.3
    value.alternateIdentifier ?? "", // CE.4
    value.alternateText ?? "", // CE.5
    value.nameOfAlternateCodingSystem ?? "", // CE.6
  ];
  return values.join("^");
};

export type VersionIdentifier = {
  versionID?: VersionID; // VID.1
  internationalizationCode?: CountryCode; // VID.2
  internationalVersionId?: CodedElement; // VID.3
};

export const encodeVersionIdentifier = (value?: VersionIdentifier) => {
  if (!value) {
    return "";
  }

  const values: string[] = [
    value.versionID ?? "", // VID.1
    value.internationalizationCode ?? "", // VID.2
    encodeCodedElement(value.internationalVersionId), // VID.3
  ];
  return values.join("^");
};

export const decodeVersionIdentifier = (
  content: string,
  parserSettings: ParserSettings,
): VersionIdentifier => {
  const items = content.split(componentRegex(parserSettings));

  return {
    versionID: items[0] as VersionID,
    internationalizationCode: items[1] as CountryCode,
    internationalVersionId: undefined,
  };
};

export type ELDError = {
  segmentID?: string; // ELD.1
  sequence?: number; // ELD.2
  fieldPosition?: number; // ELD.3
  codeIdentifyingError?: CodedElement; // ELD.4
};

export const encodeELDError = (value?: ELDError) => {
  if (!value) {
    return "";
  }

  const values: string[] = [
    value.segmentID ?? "", // ELD.1
    value.sequence?.toString() ?? "", // ELD.2
    value.fieldPosition?.toString() ?? "", // ELD.3
    encodeCodedElement(value.codeIdentifyingError) ?? "", // ELD.4
  ];
  return values.join("^");
};
