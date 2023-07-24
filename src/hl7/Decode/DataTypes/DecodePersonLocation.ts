import { getNextHL7Type, HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent } from '../../utils/DecoderUtils.ts';
import { PersonLocation } from '../../Types/DataTypes/PersonLocation.ts';
import { decodeHierarchicDesignator } from './DecodeHierarchicDesignator.ts';
import { string } from 'typescript-json-decoder';
import { decodeEntityIdentifier } from './DecodeEntityIdentifier.ts';

export const decodePersonLocation = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'PersonLocation (PL)',
    type,
    settings,
    (data): PersonLocation => ({
      pointOfCare: optComponent('PL.1', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[0]),
      room: optComponent('PL.2', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[1]),
      bed: optComponent('PL.3', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[2]),
      facility: optComponent('PL.4', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[3]),
      locationStatus: optComponent('PL.5', 0, string, data[4]),
      personLocationType: optComponent('PL.6', 0, string, data[5]),
      building: optComponent('PL.7', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[6]),
      floor: optComponent('PL.8', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[7]),
      locationDescription: optComponent('PL.9', 0, string, data[8]),
      comprehensiveLocationIdentifier: optComponent('PL.10', 0, decodeEntityIdentifier(getNextHL7Type(type), settings), data[9]),
      assigningAuthorityForLocation: optComponent('PL.11', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[10]),
    }),
  );
