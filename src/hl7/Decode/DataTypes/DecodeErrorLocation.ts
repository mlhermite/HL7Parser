import { HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, float, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { number, string } from 'typescript-json-decoder';

export const decodeErrorLocation = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext('ErrorLocation (ERL)', type, settings, (data: unknown[]) => ({
    SegmentId: reqComponent('ERL.1', 0, string, data[0]),
    SegmentSequence: reqComponent('ERL.2', 0, float, data[1]),
    FieldPosition: optComponent('ERL.3', 0, float, data[2]),
    FieldRepetition: optComponent('ERL.4', 0, float, data[3]),
    ComponentNumber: optComponent('ERL.5', 0, float, data[4]),
    SubComponentNumber: optComponent('ERL.6', 0, float, data[5]),
  }));
