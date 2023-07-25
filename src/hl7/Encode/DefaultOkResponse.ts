import { MessageHeader } from '../Types/Segments/MessageHeader.ts';
import { ACK } from '../Types/Events/ACK.ts';
import { DateTime } from 'luxon';
import { DateFormat } from '../utils/DatetimeUtils.ts';
import { Datetime } from '../Types/Tables/Datetime.ts';

export const DefaultOkResponse = (request: { MSH: MessageHeader }): ACK => ({
    MSH: {
        fieldSeparator: '|',
        encodingCharacters: '^~\\&',
        sendingApplication: request.MSH.receivingApplication,
        sendingFacility: request.MSH.receivingFacility,
        receivingApplication: request.MSH.sendingApplication,
        receivingFacility: request.MSH.sendingFacility,
        datetimeOfMessage: DateTime.now().toFormat(DateFormat) as Datetime,
        messageType: {
            messageCode: 'ACK',
            messageStructure: 'ACK',
            triggerEvent: request.MSH.messageType.triggerEvent,
        },
        processingID: request.MSH.processingID,
        versionID: request.MSH.versionID,
        messageControl: DateTime.now().toFormat(DateFormat),
        characterSet: [],
    },
    MSA: {
        acknowledgmentCode: 'AA',
        messageControlId: request.MSH.messageControl,
    },
    SFT: [],
    ERR: [],
});
