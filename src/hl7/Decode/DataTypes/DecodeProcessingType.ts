import { HL7Settings, HL7Type } from "../../utils/HL7Settings.ts";
import { arrayWithContext, opt } from "../../utils/DecoderUtils.ts";
import { decodeProcessingMode } from "../Tables/DecodeProcessingMode.ts";
import { decodeProcessingID } from "../Tables/DecodeProcessingID.ts";
import { ProcessingType } from "../../Types/DataTypes/ProcessingType.ts";

export const decodeProcessingType = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    "ProcessingType (PT)",
    type,
    settings,
    (data): ProcessingType => ({
      processingId: decodeProcessingID(data[0]),
      processingMode: opt(decodeProcessingMode)(data[1]),
    }),
  );
