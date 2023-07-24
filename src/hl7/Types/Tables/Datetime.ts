type TZ = `+${number}` | `-${number}` | "";
type Millis = `.${number}` | "";

export type Datetime = `${number}${Millis}${TZ}`;
