import { getNextHL7Type, HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, float, optComponent } from '../../utils/DecoderUtils.ts';
import { ExtendedAddress } from '../../Types/DataTypes/ExtendedAddress.ts';
import { decodeEntityIdentifier } from './DecodeEntityIdentifier.ts';
import { number, string } from 'typescript-json-decoder';
import { decodeCountryCode } from '../Tables/DecodeCountryCode.ts';
import { decodeCodedWithExceptions } from './DecodeCodedWithExceptions.ts';
import { decodeNameAddressRepresentation } from '../Tables/DecodeNameAddressRepresentation.ts';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { decodeAddressType } from '../Tables/DecodeAddressType.ts';
import { decodeYesNoIndicator } from '../Tables/DecodeYesNoIndicator.ts';
import { decodeStreetAddress } from './DecodeStreetAddress.ts';
import { decodeAddressUsage } from '../Tables/DecodeAddressUsage.ts';

export const decodeExtendedAddress = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'ExtendedAddress (XAD)',
    type,
    settings,
    (data): ExtendedAddress => ({
      streetAddress: optComponent('XAD.1', 0, decodeStreetAddress(getNextHL7Type(type), settings), data[0]),
      otherDesignation: optComponent('XAD.2', 0, string, data[1]),
      city: optComponent('XAD.3', 0, string, data[2]),
      stateOrProvince: optComponent('XAD.4', 0, string, data[3]),
      zipOrPostalCode: optComponent('XAD.5', 0, string, data[4]),
      country: optComponent('XAD.6', 0, decodeCountryCode, data[5]),
      addressType: optComponent('XAD.7', 0, decodeAddressType, data[6]),
      otherGeographicDesignation: optComponent('XAD.8', 0, string, data[7]),
      countyCode: optComponent('XAD.9', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[8]),
      censusTract: optComponent('XAD.10', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[9]),
      addressRepresentationCode: optComponent('XAD.11', 0, decodeNameAddressRepresentation, data[10]),
      addressValidityRange: optComponent('XAD.12', 0, string, data[11]),
      effectiveDate: optComponent('XAD.13', 0, decodeDatetime, data[12]),
      expirationDate: optComponent('XAD.14', 0, decodeDatetime, data[13]),
      expirationReason: optComponent('XAD.15', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[14]),
      temporaryIndicator: optComponent('XAD.16', 0, decodeYesNoIndicator, data[15]),
      badAddressIndicator: optComponent('XAD.17', 0, decodeYesNoIndicator, data[16]),
      addressUsage: optComponent('XAD.18', 0, decodeAddressUsage, data[17]),
      addressee: optComponent('XAD.19', 0, string, data[18]),
      comment: optComponent('XAD.20', 0, string, data[19]),
      preferenceOrder: optComponent('XAD.21', 0, float, data[20]),
      protectionCode: optComponent('XAD.22', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[21]),
      addressIdentifier: optComponent('XAD.23', 0, decodeEntityIdentifier(getNextHL7Type(type), settings), data[22]),
    }),
  );
