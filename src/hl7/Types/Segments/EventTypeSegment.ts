import { HierarchicDesignator } from '../DataTypes/HierarchicDesignator.ts';
import { Datetime } from '../Tables/Datetime.ts';
import { CodedWithExceptions } from '../DataTypes/CodedWithExceptions.ts';
import { ExtendedCompositeIdName } from '../DataTypes/ExtendedCompositeIdName.ts';

/**
 * HL7 v2.8 - EVN - Event Type
 *
 * The EVN segment is used to communicate necessary trigger event information to receiving applications. Valid event types for all chapters are contained in HL7 Table 0003 - Event Type.
 *
 * <pre>
 * EVN.1 - Event Type Code  ----------  0  ST   Withdrawn  Single
 * EVN.2 - Recorded Date/Time  -------  0  DTM  Required   Single
 * EVN.3 - Date/Time Planned Event  --  0  DTM  Optional   Single
 * EVN.4 - Event Reason Code  --------  0  CWE  Optional   Single
 * EVN.5 - Operator Id  --------------  0  XCN  Optional   Multiple
 * EVN.6 - Event Occurred  -----------  0  DTM  Optional   Single
 * EVN.7 - Event Facility  -----------  0  HD   Optional   Single
 * </pre>
 */
export type EventTypeSegment = {
  eventTypeCode?: string; // EVN.1
  recordedDatetime: Datetime; // EVN.2
  datetimePlannedEvent?: Datetime; // EVN.3
  eventReasonCode?: CodedWithExceptions; // EVN.4
  operatorId: ExtendedCompositeIdName[]; // EVN.5
  eventOccurred?: Datetime; // EVN.6
  eventFacility?: HierarchicDesignator; // EVN.7
};
