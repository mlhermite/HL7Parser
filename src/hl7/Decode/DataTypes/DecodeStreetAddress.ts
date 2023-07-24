import { HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent } from '../../utils/DecoderUtils.ts';
import { StreetAddress } from '../../Types/DataTypes/StreetAddress.ts';
import { string } from 'typescript-json-decoder';

export const decodeStreetAddress = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'StreetAddress (SAD)',
    type,
    settings,
    (data): StreetAddress => ({
      streetOrMailingAddress: optComponent('SAD.1', 0, string, data[0]),
      streetName: optComponent('SAD.2', 0, string, data[1]),
      dwellingNumber: optComponent('SAD.3', 0, string, data[2]),
    }),
  );
