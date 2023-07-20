import {
  AcknowledgmentCode,
  DelayedAcknowledgmentType,
} from "./HL7MessageValues.ts";
import { CodedElement, encodeCodedElement } from "./HL7MessageObjects.ts";

export type MessageAcknowledgmentType = {
  acknowledgementCode: AcknowledgmentCode; // MSA.1
  messageControlID: string; // MSA.2
  textMessage?: string; // MSA.3
  expectedSequenceNumber?: number; // MSA.4
  receivingApplication?: DelayedAcknowledgmentType; // MSA.5
  errorCondition?: CodedElement; // MSA.6
};

export class MessageAcknowledgment {
  constructor(readonly MSA: MessageAcknowledgmentType) {}

  encode = () => {
    const values: string[] = [
      "MSA",
      this.MSA.acknowledgementCode, // MSA.1
      this.MSA.messageControlID, // MSA.2
      this.MSA.textMessage ?? "", // MSA.3
      this.MSA.expectedSequenceNumber?.toString() ?? "", // MSA.4
      this.MSA.receivingApplication ?? "", // MSA.5
      encodeCodedElement(this.MSA.errorCondition), // MSA.6
    ];
    return values.join("|");
  };
}
