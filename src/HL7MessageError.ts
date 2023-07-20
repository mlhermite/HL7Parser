import { ELDError, encodeELDError } from "./HL7MessageObjects.ts";

export type MessageErrorType = {
  errorCodeAndLocation: ELDError; // ERR.1
};

export class MessageError {
  constructor(readonly ERR: MessageErrorType) {}

  encode = () => {
    const values: string[] = [
      "ERR",
      encodeELDError(this.ERR.errorCodeAndLocation), // ERR.1
    ];
    return values.join("|");
  };
}
