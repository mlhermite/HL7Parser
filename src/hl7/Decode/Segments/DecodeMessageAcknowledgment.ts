import { HL7Settings } from "../../utils/HL7Settings.ts";
import { arrayWithContext, opt } from "../../utils/DecoderUtils.ts";
import { decodeAcknowledgmentCode } from "../Tables/DecodeAcknowledgmentCode.ts";
import { number, string } from "typescript-json-decoder";
import { MessageAcknowledgment } from "../../Types/Segments/MessageAcknowledgment.ts";
import { decodeMessageWaitingPriority } from "../Tables/DecodeMessageWaitingPriority.ts";

export const decodeMessageAcknowledgment = (settings: HL7Settings) =>
  arrayWithContext(
    "MessageAcknowledgment (MSA)",
    "segment",
    settings,
    (data): MessageAcknowledgment => ({
      acknowledgmentCode: decodeAcknowledgmentCode(data[1]), // MSA.1
      messageControlId: string(data[2]), // MSA.2
      textMessage: opt(string)(data[3]), // MSA.3
      expectedSequenceNumber: opt(number)(data[4]), // MSA.4
      delayedAcknowledgmentType: opt(string)(data[5]), // MSA.5
      errorCondition: opt(string)(data[6]), // MSA.6
      messageWaitingNumber: opt(number)(data[7]), // MSA.7
      messageWaitingPriority: opt(decodeMessageWaitingPriority)(data[8]), // MSA.8
    }),
  );
