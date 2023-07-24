import { HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { decodeCodedWithExceptions } from './DecodeCodedWithExceptions.ts';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { FinancialClass } from '../../Types/DataTypes/FinancialClass.ts';

export const decodeFinancialClass = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'FinancialClass (FC)',
    type,
    settings,
    (data: unknown[]): FinancialClass => ({
      financialClassCode: reqComponent('FC.1', 0, decodeCodedWithExceptions('component', settings), data[0]),
      effectiveDate: optComponent('FC.2', 0, decodeDatetime, data[1]),
    }),
  );
