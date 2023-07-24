import { MessageHeader } from '../Types/Segments/MessageHeader.ts';
import { ACK } from '../Types/Events/ACK.ts';
import { DateTime } from 'luxon';
import { DateFormat } from '../utils/DatetimeUtils.ts';
import { Datetime } from '../Types/Tables/Datetime.ts';

export const DefaultOkResponse = (request: { MSH: MessageHeader }): ACK => ({
  MSH: {
    fieldSeparator: '|',
    encodingCharacters: '^~\\&',
    datetimeOfMessage: DateTime.now().toFormat(DateFormat) as Datetime,
    messageType: {
      messageCode: 'ACK',
      messageStructure: 'ACK',
      triggerEvent: 'A01',
    },
    processingID: { processingId: 'P' },
    versionID: { versionId: '2.5' },
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
