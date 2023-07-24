import { HL7Settings, settingsToHeader } from '../../utils/HL7Settings.ts';
import { arrayWithContext, listComponent, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { decodeCodedWithExceptions } from '../DataTypes/DecodeCodedWithExceptions.ts';
import { number, string } from 'typescript-json-decoder';
import { decodeHierarchicDesignator } from '../DataTypes/DecodeHierarchicDesignator.ts';
import { MessageHeader } from '../../Types/Segments/MessageHeader.ts';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { decodeMessageType } from '../DataTypes/DecodeMessageType.ts';
import { decodeProcessingType } from '../DataTypes/DecodeProcessingType.ts';
import { decodeVersionIdentifier } from '../DataTypes/DecodeVersionIdentifier.ts';
import { decodeAcknowledgmentConditions } from '../Tables/DecodeAcknowledgmentConditions.ts';
import { decodeCountryCode } from '../Tables/DecodeCountryCode.ts';
import { decodeAlternateCharacterSets } from '../Tables/DecodeAlternateCharacterSets.ts';
import { decodeAlternateCharacterSetHandlingScheme } from '../Tables/DecodeAlternateCharacterSetHandlingScheme.ts';
import { decodeEntityIdentifier } from '../DataTypes/DecodeEntityIdentifier.ts';
import { decodeExtendedOrganizationIdentifier } from '../DataTypes/DecodeExtendedOrganizationIdentifier.ts';

/**
 * Decode a message header segment
 * Index is offset by 1 because fieldSeparator is not a component
 * @param value
 */
export const decodeMessageHeader = (value: unknown) => {
  const strValue = string(value);
  const settings: HL7Settings = {
    fieldSeparator: strValue[3],
    componentSeparator: strValue[4],
    repetitionSeparator: strValue[5],
    escapeCharacter: strValue[6],
    subcomponentSeparator: strValue[7],
  };
  return arrayWithContext(
    'MessageHeader (MSH)',
    'segment',
    settings,
    (data): MessageHeader => ({
      ...settingsToHeader(settings),
      sendingApplication: optComponent('MSH.3', 0, decodeHierarchicDesignator('component', settings), data[2]),
      sendingFacility: optComponent('MSH.4', 0, decodeHierarchicDesignator('component', settings), data[3]),
      receivingApplication: optComponent('MSH.5', 0, decodeHierarchicDesignator('component', settings), data[4]),
      receivingFacility: optComponent('MSH.6', 0, decodeHierarchicDesignator('component', settings), data[5]),
      datetimeOfMessage: reqComponent('MSH.7', 0, decodeDatetime, data[6]),
      security: optComponent('MSH.8', 0, string, data[7]),
      messageType: reqComponent('MSH.9', 0, decodeMessageType('component', settings), data[8]),
      messageControl: reqComponent('MSH.10', 0, string, data[9]),
      processingID: reqComponent('MSH.11', 0, decodeProcessingType('component', settings), data[10]),
      versionID: reqComponent('MSH.12', 0, decodeVersionIdentifier('component', settings), data[11]),
      sequenceNumber: optComponent('MSH.13', 0, number, data[12]),
      continuationPointer: optComponent('MSH.14', 0, string, data[13]),
      acceptAcknowledgmentType: optComponent('MSH.15', 0, decodeAcknowledgmentConditions, data[14]),
      applicationAcknowledgmentType: optComponent('MSH.16', 0, decodeAcknowledgmentConditions, data[15]),
      countryCode: optComponent('MSH.17', 0, decodeCountryCode, data[16]),
      characterSet: listComponent('MSH.18', decodeAlternateCharacterSets, 'infinite', false, data[17], settings),
      principalLanguageOfMessage: optComponent('MSH.19', 0, decodeCodedWithExceptions('component', settings), data[18]),
      alternateCharacterSetHandlingScheme: optComponent('MSH.20', 0, decodeAlternateCharacterSetHandlingScheme, data[19]),
      messageProfileIdentifier: listComponent('MSH.21', decodeEntityIdentifier('component', settings), 'infinite', false, data[20], settings),
      sendingResponsibleOrganization: optComponent('MSH.22', 0, decodeExtendedOrganizationIdentifier('component', settings), data[21]),
      receivingResponsibleOrganization: optComponent('MSH.23', 0, decodeExtendedOrganizationIdentifier('component', settings), data[22]),
      sendingNetworkAddress: optComponent('MSH.24', 0, decodeHierarchicDesignator('component', settings), data[23]),
      receivingNetworkAddress: optComponent('MSH.25', 0, decodeHierarchicDesignator('component', settings), data[24]),
    }),
  )(value);
};
