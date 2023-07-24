import { getNextHL7Type, HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent } from '../../utils/DecoderUtils.ts';
import { string } from 'typescript-json-decoder';
import { decodeCodedWithExceptions } from './DecodeCodedWithExceptions.ts';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { decodeNameAddressRepresentation } from '../Tables/DecodeNameAddressRepresentation.ts';
import { decodeHierarchicDesignator } from './DecodeHierarchicDesignator.ts';
import { decodeIdentifierType } from '../Tables/DecodeIdentifierType.ts';
import { ExtendedCompositeIdName } from '../../Types/DataTypes/ExtendedCompositeIdName.ts';
import { decodeFamilyName } from './DecodeFamilyName.ts';
import { decodeCheckDigitScheme } from '../Tables/DecodeCheckDigitScheme.ts';
import { decodeNameAssemblyOrder } from '../Tables/DecodeNameAssemblyOrder.ts';
import { decodeNameType } from '../Tables/DecodeNameType.ts';
import { decodeSecurityCheckScheme } from '../Tables/DecodeSecurityCheckScheme.ts';

export const decodeExtendedCompositeIdName = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'ExtendedCompositeIdName (XCN)',
    type,
    settings,
    (data: unknown[]): ExtendedCompositeIdName => ({
      personIdentifier: optComponent('XCN.1', 0, string, data[0]),
      familyName: optComponent('XCN.2', 0, decodeFamilyName(getNextHL7Type(type), settings), data[1]),
      givenName: optComponent('XCN.3', 0, string, data[2]),
      secondAndFurtherNames: optComponent('XCN.4', 0, string, data[3]),
      suffix: optComponent('XCN.5', 0, string, data[4]),
      prefix: optComponent('XCN.6', 0, string, data[5]),
      degree: optComponent('XCN.7', 0, string, data[6]),
      sourceTable: optComponent('XCN.8', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[7]),
      assigningAuthority: optComponent('XCN.9', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[8]),
      nameTypeCode: optComponent('XCN.10', 0, decodeNameType, data[9]),
      identifierCheckDigit: optComponent('XCN.11', 0, string, data[10]),
      checkDigitScheme: optComponent('XCN.12', 0, decodeCheckDigitScheme, data[11]),
      identifierTypeCode: optComponent('XCN.13', 0, decodeIdentifierType, data[12]),
      assigningFacility: optComponent('XCN.14', 0, decodeHierarchicDesignator(getNextHL7Type(type), settings), data[13]),
      nameRepresentationCode: optComponent('XCN.15', 0, decodeNameAddressRepresentation, data[14]),
      nameContext: optComponent('XCN.16', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[15]),
      nameValidityRange: optComponent('XCN.17', 0, string, data[16]),
      nameAssemblyOrder: optComponent('XCN.18', 0, decodeNameAssemblyOrder, data[17]),
      effectiveDate: optComponent('XCN.19', 0, decodeDatetime, data[18]),
      expirationDate: optComponent('XCN.20', 0, decodeDatetime, data[19]),
      professionalSuffix: optComponent('XCN.21', 0, string, data[20]),
      assigningJurisdiction: optComponent('XCN.22', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[21]),
      assigningAgencyOrDepartment: optComponent('XCN.23', 0, decodeCodedWithExceptions(getNextHL7Type(type), settings), data[22]),
      securityCheck: optComponent('XCN.24', 0, string, data[23]),
      securityCheckScheme: optComponent('XCN.25', 0, decodeSecurityCheckScheme, data[24]),
    }),
  );
