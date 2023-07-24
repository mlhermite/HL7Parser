import { string } from 'typescript-json-decoder';
import { AcceptedDateFormats, AcceptedDateTimeFormats, dateTimeFromFormats } from '../../utils/DatetimeUtils.ts';
import { Datetime } from '../../Types/Tables/Datetime.ts';
import { DateValue } from '../../Types/Tables/DateValue.ts';

export const decodeDateValue = (value: unknown): DateValue => {
  const strValue = string(value);
  const date = dateTimeFromFormats(strValue, AcceptedDateFormats);
  if (!date) {
    throw `Date is invalid ${strValue}, expected : YYYY[MM[DD]`;
  }
  return strValue as DateValue;
};
