import { string } from 'typescript-json-decoder';
import { AcceptedDateTimeFormats, dateTimeFromFormats } from '../../utils/DatetimeUtils.ts';
import { Datetime } from '../../Types/Tables/Datetime.ts';

export const decodeDatetime = (value: unknown): Datetime => {
  const strValue = string(value);
  const date = dateTimeFromFormats(strValue, AcceptedDateTimeFormats);
  if (!date) {
    throw `Datetime is invalid ${strValue}, expected : YYYY[MM[DD[HH[MM[SS[.S[SS]]]]]]][+/-ZZZZ]`;
  }
  return strValue as Datetime;
};
