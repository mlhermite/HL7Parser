import { MessageHeader, MessageHeaderType } from "./HL7MessageHeader.ts";
import {
  MessageAcknowledgment,
  MessageAcknowledgmentType,
} from "./HL7MessageAcknowlegment.ts";
import { MessageError, MessageErrorType } from "./HL7MessageError.ts";
import { DateTime } from "luxon";

export class HL7MessageResponse {
  MSH: MessageHeader;
  MSA: MessageAcknowledgment;
  ERR?: MessageError;

  constructor(
    header: MessageHeaderType,
    acknowledgment: MessageAcknowledgmentType,
    error?: MessageErrorType,
  ) {
    this.MSH = new MessageHeader(header);
    this.MSA = new MessageAcknowledgment(acknowledgment);
    this.ERR = error ? new MessageError(error) : undefined;
  }

  static OkResponse = (request: { MSH: MessageHeader }): HL7MessageResponse =>
    new HL7MessageResponse(
      {
        fieldSeparator: "|",
        encoding: "^~\\&",
        datetimeOfMessage: DateTime.now().toFormat("YYYYMMDDHHMMSS.SSSS"),
        messageType: {
          messageType: "ACK",
          messageStructure: "ACK",
          triggerEvent: "A01",
        },
        processingID: { processingID: "D" },
        versionID: {},
        messageControl: request.MSH.MSH.messageControl,
      },
      {
        acknowledgementCode: "AA",
        messageControlID: "",
      },
    );
  encode = () =>
    `${this.MSH.encode()}\r${this.MSA.encode()}\r${
      this.ERR ? `${this.ERR.encode()}\r` : ""
    }`;
}
