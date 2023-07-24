import {
  array,
  boolean,
  DecoderFunction,
  field,
  string,
  union,
} from "typescript-json-decoder";
import { tag } from "typescript-json-decoder/dist/utils";
import { fieldDecoder } from "typescript-json-decoder/dist/literal-decoders";
import { HL7Settings, HL7Type, split } from "./HL7Settings.ts";

const wrapErrorWithContext = (context: string, e: unknown) => {
  if (typeof e === "string") {
    e.replace(/\\t+/g, "$&\t");
    return `While decoding ${context} : \n\t${e}`;
  } else {
    return e;
  }
};

export const reqComponent = <T>(
  name: string,
  maxLength: number,
  decoder: DecoderFunction<T>,
  value: unknown,
): T => {
  try {
    const strValue = string(value);
    if (maxLength && strValue.length > maxLength)
      throw `Value ${name} exceeds max length (${strValue.length} / ${maxLength}): ${strValue}`;
    return decoder(strValue);
  } catch (e) {
    throw wrapErrorWithContext(name, e);
  }
};

export const optComponent = <T>(
  name: string,
  maxLength: number,
  decoder: DecoderFunction<T>,
  value: unknown,
): T | undefined => {
  try {
    const strValue = opt(string)(value);
    if (strValue === undefined) {
      return undefined;
    }
    if (maxLength && strValue.length > maxLength)
      throw `Value ${name} exceeds max length (${strValue.length} / ${maxLength}): ${strValue}`;
    return decoder(strValue);
  } catch (e) {
    throw wrapErrorWithContext(name, e);
  }
};

export const listComponent = <T>(
  name: string,
  decoder: DecoderFunction<T>,
  repeat: "infinite" | number,
  required: boolean,
  value: unknown,
  settings: HL7Settings,
): T[] => {
  try {
    const strValue = required ? string(value) : opt(string)(value);
    if (strValue === undefined) {
      return [];
    }
    const strList = split("list", settings, strValue);
    if (typeof repeat === "number" && strList.length > repeat) {
      throw `Too many repeated items provided for ${name}: ${strList.length} / ${repeat}`;
    }
    return strList.map(decoder);
  } catch (e) {
    throw wrapErrorWithContext(name, e);
  }
};

export const stringUnion = <T extends string = "">(...values: T[]) =>
  union(...values);

export const stringUnionMapUndef =
  <T extends string = "">(undefinedValue: string, ...values: T[]) =>
  (value: unknown) => {
    if (typeof value === "string" && value === undefinedValue) {
      return undefined;
    } else {
      return stringUnion(...values)(value);
    }
  };

export const opt =
  <T>(decoder: DecoderFunction<T>): DecoderFunction<T | undefined> =>
  (value: unknown) => {
    if (value === null || value === undefined || value === "") {
      return undefined;
    }
    return decoder(value);
  };
export const deepField = <T>(
  key: string,
  decoder: DecoderFunction<T>,
): DecoderFunction<T> => {
  const newDecoder = (value: unknown): T => {
    const keys = key.split(".");
    let parsedValue: unknown = value;
    for (let i = 0; i < keys.length; i++) {
      parsedValue = field(keys[i], (v) => v)(parsedValue);
    }

    return decoder(parsedValue);
  };
  tag(newDecoder, fieldDecoder);
  return newDecoder;
};

export const forcedBoolean = (value: unknown) =>
  value !== undefined && value !== null && boolean(value);

export const arrayWithContext =
  <T extends object>(
    context: string,
    type: HL7Type,
    settings: HL7Settings,
    fn: (data: unknown[], originalData: string) => T,
  ): DecoderFunction<T> =>
  (value: unknown) => {
    try {
      const strValue = string(value);
      const data = split(type, settings, strValue);
      return fn(data, strValue);
    } catch (e) {
      throw wrapErrorWithContext(context, e);
    }
  };

export const repeatable =
  <T>(settings: HL7Settings, decoder: DecoderFunction<T>) =>
  (value: unknown) => {
    const strValue = opt(string)(value);
    if (!strValue) {
      return [];
    }
    const data = split("list", settings, strValue);
    return array(decoder)(data);
  };

export const decodeRequiredSegment = <T>(
  segmentName: string,
  decoder: DecoderFunction<T>,
  data: string[],
): T => {
  const line = data.find((line) => line.startsWith(segmentName));
  if (!line) {
    throw `Missing ${segmentName}, not found in ${data.map((line) =>
      line.slice(0, 4),
    )}`;
  }
  return decoder(line);
};

export const decodeSegment = <T>(
  segmentName: string,
  decoder: DecoderFunction<T>,
  data: string[],
): T | undefined => {
  const line = data.find((line) => line.startsWith(segmentName));
  if (!line) {
    return undefined;
  }
  return decoder(line);
};

export const decodeRepeatableSegment = <T>(
  segmentName: string,
  decoder: DecoderFunction<T>,
  data: string[],
): T[] => {
  const lines = data.filter((line) => line.startsWith(segmentName));
  if (!lines) {
    return [];
  }
  return lines.map(decoder);
};
