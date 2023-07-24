/**
 * This data type identifies the segment and its constituent where an error has occurred.
 *
 * ERL.1 - Segment Id  ------------  3  ST  Required  Single
 * ERL.2 - Segment Sequence  ------  0  NM  Required  Single
 * ERL.3 - Field Position  --------  0  NM  Optional  Single
 * ERL.4 - Field Repetition  ------  0  NM  Optional  Single
 * ERL.5 - Component Number  ------  0  NM  Optional  Single
 * ERL.6 - Sub-component Number  --  0  NM  Optional  Single
 */
export type ErrorLocation = {
  SegmentId: string; // ERL.1
  SegmentSequence: number; // ERL.2
  FieldPosition?: number; // ERL.3
  FieldRepetition?: number; // ERL.4
  ComponentNumber?: number; // ERL.5
  SubComponentNumber?: number; // ERL.6
};
