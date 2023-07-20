import { MessageHeader } from "./HL7MessageHeader.ts";

export class HL7MessageRequest {
  MSH: MessageHeader;

  constructor(readonly content: string) {
    const lines = content.split("\r");
    this.MSH = MessageHeader.decode(
      lines.find((line) => line.startsWith("MSH")),
    );
  }
}
