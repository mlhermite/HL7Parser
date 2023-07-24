import { getNextHL7Type, HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { ExtendedOrganizationIdentifier } from '../../Types/DataTypes/ExtendedOrganizationIdentifier.ts';
import { string } from 'typescript-json-decoder';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { decodeNameAssemblyOrder } from '../Tables/DecodeNameAssemblyOrder.ts';
import { decodeCodedWithExceptions } from './DecodeCodedWithExceptions.ts';
import { decodeNameAddressRepresentation } from '../Tables/DecodeNameAddressRepresentation.ts';
import { decodeNameType } from '../Tables/DecodeNameType.ts';
import { ExtendedPersonName } from '../../Types/DataTypes/ExtendedPersonName.ts';
import { decodeFamilyName } from './DecodeFamilyName.ts';

export const decodeExtendedPersonName = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'ExtendedPersonName (XPN)',
    type,
    settings,
    (data): ExtendedPersonName => ({
      familyName: reqComponent('XPN.1', 0, decodeFamilyName(getNextHL7Type(type), settings), data[1]),
      givenName: optComponent('XPN.2', 0, string, data[2]),
      secondAndFurtherNames: optComponent('XPN.3', 0, string, data[3]),
      suffix: optComponent('XPN.4', 0, string, data[4]),
      prefix: optComponent('XPN.5', 0, string, data[5]),
      degree: optComponent('XPN.6', 0, string, data[6]),
      nameTypeCode: optComponent('XPN.7', 0, decodeNameType, data[7]),
      nameRepresentationCode: optComponent('XPN.8', 0, decodeNameAddressRepresentation, data[8]),
      nameContext: optComponent('XPN.9', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[9]),
      nameValidityRange: optComponent('XPN.10', 0, string, data[10]),
      nameAssemblyOrder: optComponent('XPN.11', 0, decodeNameAssemblyOrder, data[11]),
      effectiveDate: optComponent('XPN.12', 0, decodeDatetime, data[12]),
      expirationDate: optComponent('XPN.13', 0, decodeDatetime, data[13]),
      professionalSuffix: optComponent('XPN.14', 0, string, data[14]),
      calledBy: optComponent('XPN.15', 0, string, data[15]),
    }),
  );
