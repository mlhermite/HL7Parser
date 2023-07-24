import { getNextHL7Type, HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent } from '../../utils/DecoderUtils.ts';
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
      streetAddress: optComponent('XAD.1', 0, decodeStreetAddress(getNextHL7Type(type), settings), data[1]),
      otherDesignation: optComponent('XAD.2', 0, string, data[2]),
      city: optComponent('XAD.3', 0, string, data[3]),
      stateOrProvince: optComponent('XAD.4', 0, string, data[4]),
      zipOrPostalCode: optComponent('XAD.5', 0, string, data[5]),
      country: optComponent('XAD.6', 0, decodeCountryCode, data[6]),
      addressType: optComponent('XAD.7', 0, decodeAddressType, data[7]),
      otherGeographicDesignation: optComponent('XAD.8', 0, string, data[8]),
      countyCode: optComponent('XAD.9', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[9]),
      censusTract: optComponent('XAD.10', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[10]),
      addressRepresentationCode: optComponent('XAD.11', 0, decodeNameAddressRepresentation, data[11]),
      addressValidityRange: optComponent('XAD.12', 0, string, data[12]),
      effectiveDate: optComponent('XAD.13', 0, decodeDatetime, data[13]),
      expirationDate: optComponent('XAD.14', 0, decodeDatetime, data[14]),
      expirationReason: optComponent('XAD.15', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[15]),
      temporaryIndicator: optComponent('XAD.16', 0, decodeYesNoIndicator, data[16]),
      badAddressIndicator: optComponent('XAD.17', 0, decodeYesNoIndicator, data[17]),
      addressUsage: optComponent('XAD.18', 0, decodeAddressUsage, data[18]),
      addressee: optComponent('XAD.19', 0, string, data[19]),
      comment: optComponent('XAD.20', 0, string, data[20]),
      preferenceOrder: optComponent('XAD.21', 0, number, data[21]),
      protectionCode: optComponent('XAD.22', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[22]),
      addressIdentifier: optComponent('XAD.23', 0, decodeEntityIdentifier(getNextHL7Type(type), settings), data[23]),
    }),
  );
