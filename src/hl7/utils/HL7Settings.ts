export type HL7Settings = {
  fieldSeparator: string;
  componentSeparator: string;
  repetitionSeparator: string;
  escapeCharacter: string;
  subcomponentSeparator: string;
};

export type HL7Type = 'event' | 'segment' | 'component' | 'subcomponent';

export const escapableRegex = (char: string, escapeChar: string) =>
  new RegExp(`(?:(?<!${escapeChar}${escapeChar})|(?<=(?:${escapeChar}${escapeChar}${escapeChar}${escapeChar})+))${escapeChar}${char}`);

export const eventRegex = /\r/;
export const segmentRegex = (settings: HL7Settings) => escapableRegex(settings.fieldSeparator, settings.escapeCharacter);
export const componentRegex = (settings: HL7Settings) => escapableRegex(settings.componentSeparator, settings.escapeCharacter);
export const subcomponentRegex = (settings: HL7Settings) => escapableRegex(settings.subcomponentSeparator, settings.escapeCharacter);
export const repeatRegex = (settings: HL7Settings) => escapableRegex(settings.repetitionSeparator, settings.escapeCharacter);

export const split = (type: HL7Type | 'list', settings: HL7Settings, data: string): string[] => {
  switch (type) {
    case 'event':
      return data.split(eventRegex);
    case 'segment':
      return data.split(segmentRegex(settings));
    case 'component':
      return data.split(componentRegex(settings));
    case 'subcomponent':
      return data.split(subcomponentRegex(settings));
    case 'list':
      return data.split(repeatRegex(settings));
  }
};

export const getNextHL7Type = (type: HL7Type): HL7Type => {
  switch (type) {
    case 'event':
      return 'segment';
    case 'segment':
      return 'component';
    case 'component':
      return 'subcomponent';
    case 'subcomponent':
      return 'subcomponent';
  }
};

export const settingsToHeader = (settings: HL7Settings) => ({
  fieldSeparator: settings.fieldSeparator, // MSH.1
  encodingCharacters: `${settings.componentSeparator}${settings.repetitionSeparator}${settings.escapeCharacter}${settings.subcomponentSeparator}`,
});

export const settingsFromMSH = (MSH: { fieldSeparator: string; encodingCharacters: string }): HL7Settings => ({
  fieldSeparator: MSH.fieldSeparator,
  componentSeparator: MSH.encodingCharacters[0],
  repetitionSeparator: MSH.encodingCharacters[1],
  escapeCharacter: MSH.encodingCharacters[2],
  subcomponentSeparator: MSH.encodingCharacters[3],
});

export const sepFromHL7Type = (type: HL7Type, settings: HL7Settings): string => {
  switch (type) {
    case 'event':
      return '\r';
    case 'segment':
      return settings.fieldSeparator;
    case 'component':
      return settings.componentSeparator;
    case 'subcomponent':
      return settings.subcomponentSeparator;
  }
};
