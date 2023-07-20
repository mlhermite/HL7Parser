import {
  decodeMessage,
  decodeProcessingType,
  decodeVersionIdentifier,
  encodeHierarchicDesignator,
  encodeMessage,
  encodeProcessingType,
  encodeVersionIdentifier,
  HierarchicDesignator,
  Message,
  ProcessingType,
  VersionIdentifier,
} from "./HL7MessageObjects.ts";
import { TimeStamp } from "./HL7MessageValues.ts";
import { segmentRegex } from "./utils/ParserUtils.ts";

export type MessageHeaderType = {
  fieldSeparator?: string; // MSH.1
  encoding?: string; // MSH.2
  sendingApplication?: HierarchicDesignator; // MSH.3
  sendingFacility?: HierarchicDesignator; // MSH.4
  receivingApplication?: HierarchicDesignator; // MSH.5
  receivingFacility?: HierarchicDesignator; // MSH.6
  datetimeOfMessage: TimeStamp; // MSH.7
  security?: string; // MSH.8
  messageType: Message; // MSH.9
  messageControl: string; // MSH.10
  processingID: ProcessingType; // MSH.11
  versionID: VersionIdentifier; // MSH.12
  sequenceNumber?: number; // MSH.13
  /*
  TODO
MSH.14 - Continuation Pointer	180	ST	O	-
MSH.15 - Accept Acknowledgment Type	2	ID	O	-	0155
MSH.16 - Application Acknowledgment Type	2	ID	O	-	0155
MSH.17 - Country Code	3	ID	O	-	0399
MSH.18 - Character Set	16	ID	O	∞	0211
MSH.19 - Principal Language Of Message	250	CE	O	-
MSH.20 - Alternate Character Set Handling Scheme	20	ID	O	-	0356
MSH.21 - Conformance Statement ID	10	ID	O	∞	0449
  */
};

export class MessageHeader {
  parserSettings = {
    fieldSeparator: "|",
    componentSeparator: "^",
    repetitionSeparator: "~",
    escapeCharacter: "\\",
    subcomponentSeparator: "&",
  };

  constructor(readonly MSH: MessageHeaderType) {
    this.parserSettings = {
      fieldSeparator: MSH.fieldSeparator ?? this.parserSettings.fieldSeparator,
      componentSeparator:
        (MSH.encoding && MSH.encoding[0]) ??
        this.parserSettings.componentSeparator,
      repetitionSeparator:
        (MSH.encoding && MSH.encoding[1]) ??
        this.parserSettings.repetitionSeparator,
      escapeCharacter:
        (MSH.encoding && MSH.encoding[2]) ??
        this.parserSettings.escapeCharacter,
      subcomponentSeparator:
        (MSH.encoding && MSH.encoding[3]) ??
        this.parserSettings.subcomponentSeparator,
    };
  }

  encode = () => {
    const values: string[] = [
      "MSH",
      // this.MSH.fieldSeparator, // MSH.1
      `${this.parserSettings.componentSeparator}${this.parserSettings.repetitionSeparator}${this.parserSettings.escapeCharacter}${this.parserSettings.subcomponentSeparator}`, // MSH.2
      encodeHierarchicDesignator(this.MSH.sendingApplication), // MSH.3
      encodeHierarchicDesignator(this.MSH.sendingFacility), // MSH.4
      encodeHierarchicDesignator(this.MSH.receivingApplication), // MSH.5
      encodeHierarchicDesignator(this.MSH.receivingFacility), // MSH.6
      this.MSH.datetimeOfMessage ?? "", // MSH.7
      this.MSH.security ?? "", // MSH.8
      encodeMessage(this.MSH.messageType), // MSH.9
      this.MSH.messageControl, // MSH.10
      encodeProcessingType(this.MSH.processingID), // MSH.11
      encodeVersionIdentifier(this.MSH.versionID), // MSH.12
      this.MSH.sequenceNumber?.toString() ?? "", // MSH.13
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
    return values.join("|");
  };

  static decode = (content: string | undefined): MessageHeader => {
    if (!content) {
      throw new Error("NO HEADER");
    }
    const parserSettings = {
      fieldSeparator: content[4],
      componentSeparator: content[5],
      repetitionSeparator: content[6],
      escapeCharacter: content[7],
      subcomponentSeparator: content[8],
    };

    const items = content.split(segmentRegex(parserSettings));
    return new MessageHeader({
      fieldSeparator: parserSettings.fieldSeparator,
      encoding: items[1], // MSH.2
      sendingApplication: undefined, // MSH.3
      sendingFacility: undefined, // MSH.4
      receivingApplication: undefined, // MSH.5
      receivingFacility: undefined, // MSH.6
      datetimeOfMessage: items[6], // MSH.7
      security: undefined, // MSH.8
      messageType: decodeMessage(items[8], parserSettings), // MSH.9
      messageControl: items[9], // MSH.10
      processingID: decodeProcessingType(items[10], parserSettings), // MSH.11
      versionID: decodeVersionIdentifier(items[11], parserSettings), // MSH.12
      sequenceNumber: undefined, // MSH.13
    });
  };
}
