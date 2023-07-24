import { HL7Settings, HL7Type } from "../../utils/HL7Settings.ts";
import { arrayWithContext } from "../../utils/DecoderUtils.ts";
import { decodeMessageCode } from "../Tables/DecodeMessageCode.ts";
import { MessageType } from "../../Types/DataTypes/MessageType.ts";
import { decodeEventType } from "../Tables/DecodeEventType.ts";
import { decodeMessageStructure } from "../Tables/DecodeMessageStructure.ts";

export const decodeMessageType = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    "MessageType (MSG)",
    type,
    settings,
    (data): MessageType => ({
      messageCode: decodeMessageCode(data[0]),
      triggerEvent: decodeEventType(data[1]),
      messageStructure: decodeMessageStructure(data[2]),
    }),
  );
