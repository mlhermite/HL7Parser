import { HL7Settings } from '../../utils/HL7Settings.ts';
import { MessageHeader } from '../../Types/Segments/MessageHeader.ts';
import { encodeList, makeComponent } from '../../utils/EncoderUtils.ts';
import { encodeString } from '../Values/EncodeString.ts';
import { encodeNumber } from '../Values/EncodeNumber.ts';
import { encodeCodedWithExceptions } from '../DataTypes/EncodeCodedWithExceptions.ts';
import { encodeHierarchicDesignator } from '../DataTypes/EncodeHierarchicDesignator.ts';
import { encodeVersionIdentifier } from '../DataTypes/EncodeVersionIdentifier.ts';
import { encodeEntityIdentifier } from '../DataTypes/EncodeEntityIdentifier.ts';
import { encodeExtendedOrganizationIdentifier } from '../DataTypes/EncodeExtendedOrganizationIdentifier.ts';
import { encodeMessageType } from '../DataTypes/EncodeMessageType.ts';
import { encodeProcessingType } from '../DataTypes/EncodeProcessingType.ts';

export const encodeMessageHeader = (item: MessageHeader, settings: HL7Settings): string | undefined => {
  return makeComponent(
    settings.fieldSeparator,
    'MSH',
    item.fieldSeparator,
    encodeString(item.encodingCharacters, 'component', settings),
    encodeHierarchicDesignator(item.sendingApplication, 'component', settings),
    encodeHierarchicDesignator(item.sendingFacility, 'component', settings),
    encodeHierarchicDesignator(item.receivingApplication, 'component', settings),
    encodeHierarchicDesignator(item.receivingFacility, 'component', settings),
    encodeString(item.datetimeOfMessage, 'component', settings),
    encodeString(item.security, 'component', settings),
    encodeMessageType(item.messageType, 'component', settings),
    encodeString(item.messageControl, 'component', settings),
    encodeProcessingType(item.processingID, 'component', settings),
    encodeVersionIdentifier(item.versionID, 'component', settings),
    encodeNumber(item.sequenceNumber, 'component', settings),
    encodeString(item.continuationPointer, 'component', settings),
    encodeString(item.acceptAcknowledgmentType, 'component', settings),
    encodeString(item.applicationAcknowledgmentType, 'component', settings),
    encodeString(item.countryCode, 'component', settings),
    encodeList(item.characterSet, encodeString, 'component', settings),
    encodeCodedWithExceptions(item.principalLanguageOfMessage, 'component', settings),
    encodeString(item.alternateCharacterSetHandlingScheme, 'component', settings),
    encodeList(item.messageProfileIdentifier, encodeEntityIdentifier, 'component', settings),
    encodeExtendedOrganizationIdentifier(item.sendingResponsibleOrganization, 'component', settings),
    encodeExtendedOrganizationIdentifier(item.receivingResponsibleOrganization, 'component', settings),
    encodeHierarchicDesignator(item.sendingNetworkAddress, 'component', settings),
    encodeHierarchicDesignator(item.receivingNetworkAddress, 'component', settings),
  );
};
