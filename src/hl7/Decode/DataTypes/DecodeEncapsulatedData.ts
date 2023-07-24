import { getNextHL7Type, HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { EncapsulatedData } from '../../Types/DataTypes/EncapsulatedData.ts';
import { decodeHierarchicDesignator } from './DecodeHierarchicDesignator.ts';
import { decodeEncoding } from '../Tables/DecodeEncoding.ts';
import { decodeMIMETypes } from '../Tables/DecodeMIMETypes.ts';
import { string } from 'typescript-json-decoder';
import { decodeSubtypeOfReferencedData } from '../Tables/DecodeSubtypeOfReferencedData.ts';

export const decodeEncapsulatedData = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'EncapsulatedData (ED)',
    type,
    settings,
    (data: unknown[]): EncapsulatedData => ({
      sourceApplication: optComponent('ED.1', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[1]),
      typeOfData: reqComponent('ED.2', 0, decodeMIMETypes, data[2]),
      dataSubtype: optComponent('ED.3', 0, decodeSubtypeOfReferencedData, data[3]),
      encoding: reqComponent('ED.4', 0, decodeEncoding, data[4]),
      data: reqComponent('ED.5', 0, string, data[5]),
    }),
  );
