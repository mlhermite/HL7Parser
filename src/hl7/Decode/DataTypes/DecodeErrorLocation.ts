import {HL7Settings, HL7Type} from "../../utils/HL7Settings.ts";
import {arrayWithContext, optComponent, reqComponent} from "../../utils/DecoderUtils.ts";
import {number, string} from "typescript-json-decoder";


export const decodeErrorLocation = (
    type: HL7Type,
    settings: HL7Settings,
) =>
    arrayWithContext(
        "ErrorLocation (ERL)",
        type,
        settings,
        (data: unknown[]) => ({
          SegmentId:  reqComponent("ERL.1", 0, string, data[1]),
          SegmentSequence:  reqComponent("ERL.2", 0, number, data[2]),
          FieldPosition:  optComponent("ERL.3", 0, number, data[3]),
          FieldRepetition:  optComponent("ERL.4", 0, number, data[4]),
          ComponentNumber:  optComponent("ERL.5", 0, number, data[5]),
          SubComponentNumber:  optComponent("ERL.6", 0, number, data[6]),
        }))
