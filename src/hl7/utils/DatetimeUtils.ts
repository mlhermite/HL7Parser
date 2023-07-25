import { DateTime } from 'luxon';

export const DateFormat = 'yyyyLLddHHmmss' as const;

export const AcceptedDateFormats = ['yyyyLLdd', 'yyyyLL', 'yyyy'];
export const AcceptedDateTimeFormats = [
    'yyyyLLddHHmmss.SSSZZZ',
    'yyyyLLddHHmmss.SSS',
    'yyyyLLddHHmmss.SZZZ',
    'yyyyLLddHHmmss.S',
    'yyyyLLddHHmmssZZZ',
    'yyyyLLddHHmmss',
    'yyyyLLddHHmmZZZ',
    'yyyyLLddHHmm',
    'yyyyLLddHHZZZ',
    'yyyyLLddHH',
    'yyyyLLddZZZ',
    'yyyyLLdd',
    'yyyyLLZZZ',
    'yyyyLL',
    'yyyyZZZ',
    'yyyy',
];

export const dateTimeFromFormats = (value: string, formats: string[]): DateTime | undefined => {
    let datetime: DateTime | undefined;
    let i = 0;
    let len = formats.length;
    while ((!datetime || !datetime.isValid) && i < len) {
        datetime = DateTime.fromFormat(value, formats[i]);
        i += 1;
    }
    return datetime && datetime.isValid ? datetime : undefined;
};
