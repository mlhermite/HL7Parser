import { HL7Settings } from '../../utils/HL7Settings.ts';
import { arrayWithContext, listComponent, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { EventTypeSegment } from '../../Types/Segments/EventTypeSegment.ts';
import { string } from 'typescript-json-decoder';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { decodeCodedWithExceptions } from '../DataTypes/DecodeCodedWithExceptions.ts';
import { decodeHierarchicDesignator } from '../DataTypes/DecodeHierarchicDesignator.ts';
import { decodeExtendedCompositeIdName } from '../DataTypes/DecodeExtendedCompositeIdName.ts';

export const decodeEventTypeSegment = (settings: HL7Settings) =>
  arrayWithContext(
    'EventTypeSegment (EVN)',
    'segment',
    settings,
    (data): EventTypeSegment => ({
      eventTypeCode: optComponent('EVN.1', 0, string, data[1]),
      recordedDatetime: reqComponent('EVN.2', 0, decodeDatetime, data[2]),
      datetimePlannedEvent: optComponent('EVN.3', 0, decodeDatetime, data[3]),
      eventReasonCode: optComponent('EVN.4', 0, decodeCodedWithExceptions('component', settings), data[4]),
      operatorId: listComponent('EVN.5', decodeExtendedCompositeIdName('component', settings), 'infinite', false, data[5], settings),
      eventOccurred: optComponent('EVN.6', 0, decodeDatetime, data[6]),
      eventFacility: optComponent('EVN.7', 0, decodeHierarchicDesignator('component', settings), data[7]),
    }),
  );
