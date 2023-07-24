import { HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { DischargeToLocationAndDate } from '../../Types/DataTypes/DischargeToLocationAndDate.ts';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { decodeCodedWithExceptions } from './DecodeCodedWithExceptions.ts';

export const decodeDischargeToLocationAndDate = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'DischargeToLocationAndDate (DLD)',
    type,
    settings,
    (data: unknown[]): DischargeToLocationAndDate => ({
      dischargeToLocation: reqComponent('DLD.1', 0, decodeCodedWithExceptions('component', settings), data[0]),
      effectiveDate: optComponent('DLD.2', 0, decodeDatetime, data[1]),
    }),
  );
