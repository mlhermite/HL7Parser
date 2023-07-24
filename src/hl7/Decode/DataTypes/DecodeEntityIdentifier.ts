import { HL7Settings, HL7Type } from "../../utils/HL7Settings.ts";
import { arrayWithContext, opt } from "../../utils/DecoderUtils.ts";
import { string } from "typescript-json-decoder";
import { decodeNamespaceID } from "../Tables/DecodeNamespaceID.ts";
import { EntityIdentifier } from "../../Types/DataTypes/EntityIdentifier.ts";
import { decodeUniversalIDType } from "../Tables/DecodeUniversalIDType.ts";

export const decodeEntityIdentifier = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext<EntityIdentifier>(
    "EntityIdentifier (EI)",
    type,
    settings,
    (data: unknown[]): EntityIdentifier => {
      const universal = {
        universalId: opt(string)(data[2]),
        universalIdType: opt(decodeUniversalIDType)(data[3]),
      };
      return {
        entityIdentifier: opt(string)(data[0]),
        namespaceId: opt(decodeNamespaceID)(data[1]),
        ...(universal.universalId && universal.universalIdType
          ? {
              universalId: universal.universalId,
              universalIdType: universal.universalIdType,
            }
          : { universalId: undefined, universalIdType: undefined }),
      };
    },
  );
