import { HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, opt } from '../../utils/DecoderUtils.ts';
import { string } from 'typescript-json-decoder';
import { decodeUniversalIDType } from '../Tables/DecodeUniversalIDType.ts';
import { decodeNamespaceID } from '../Tables/DecodeNamespaceID.ts';
import { HierarchicDesignator } from '../../Types/DataTypes/HierarchicDesignator.ts';

export const decodeHierarchicDesignator = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext<HierarchicDesignator>('HierarchicDesignator (HD)', type, settings, (data: unknown[]): HierarchicDesignator => {
    const universal = {
      universalId: opt(string)(data[1]),
      universalIdType: opt(decodeUniversalIDType)(data[2]),
    };
    return {
      namespaceId: opt(decodeNamespaceID)(data[0]),
      ...(universal.universalId && universal.universalIdType
        ? {
            universalId: universal.universalId,
            universalIdType: universal.universalIdType,
          }
        : { universalId: undefined, universalIdType: undefined }),
    };
  });
