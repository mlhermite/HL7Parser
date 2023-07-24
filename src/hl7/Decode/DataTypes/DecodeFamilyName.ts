import { HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { string } from 'typescript-json-decoder';
import { FamilyName } from '../../Types/DataTypes/FamilyName.ts';

export const decodeFamilyName = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'FamilyName (FN)',
    type,
    settings,
    (data: unknown[]): FamilyName => ({
      surname: reqComponent('FN.1', 0, string, data[0]),
      ownSurnamePrefix: optComponent('FN.2', 0, string, data[1]),
      ownSurname: optComponent('FN.3', 0, string, data[2]),
      surnamePrefixFromPartner: optComponent('FN.4', 0, string, data[3]),
      surnameFromPartner: optComponent('FN.5', 0, string, data[4]),
    }),
  );
