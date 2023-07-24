import { MessageHeader } from '../Segments/MessageHeader.ts';
import { SoftwareSegment } from '../Segments/SoftwareSegment.ts';
import { UserAuthenticationCredentialSegment } from '../Segments/UserAuthenticationCredentialSegment.ts';
import { MergePatientInformation } from '../Segments/MergePatientInformation.ts';
import { PatientIdentification } from '../Segments/PatientIdentification.ts';
import { EventTypeSegment } from '../Segments/EventTypeSegment.ts';

/**
 * HL7 v2.8 - ADT_A47 - Change patient identifier list
 *
 * A change has been done at the patient identifier list level. That is, a single PID-3 - patient identifier list value has been found to be incorrect and has been changed.
 *
 * An A47 event is used to signal a change of an incorrectly assigned PID-3 - Patient Identifier List value. The "incorrect source identifier" value is stored in the MRG segment (MRG-1 - Prior Patient Identifier List) and is to be changed to the "correct target patient ID" value stored in the PID segment (PID-3 - Patient Identifier List).
 *
 * The identifier involved in identifying the patient may or may not have accounts, which may or may not have visits. An A47 (change patient identifier list) event is intended for changing the value of the patient identifier list without affecting other subordinate identifiers. Any other subordinate identifiers that were previously associated with the "incorrect source identifier" are now associated with the "correct target identifier." Specification of these other subordinate identifiers is not required.
 *
 * This event and the message syntax do, however, allow for the specification of "new subordinate identifiers" (in addition to the PID-3 - Patient Identifier List identifier). For those environments that may require changes to these other subordinate identifiers because of this A47 (change patient identifier list) event, it is required that the old and new identifiers be a "tightly coupled" pair.
 *
 * See sections 3.6.2, "Merging patient/person information," and 3.6.2.1.4, "Change identifier," for a discussion of issues related to the implementation of change messages.
 *
 * The fields included when this message is sent should be the fields pertinent to communicate this event. When demographic data in other fields change, it is recommended that the A31 (update patient information) event be used in conjunction with this message.
 */
export type ADT_A47 = {
  MSH: MessageHeader;
  SFT: SoftwareSegment[];
  UAC?: UserAuthenticationCredentialSegment;
  EVN: EventTypeSegment;
  PID: PatientIdentification;
  MRG: MergePatientInformation;
};
