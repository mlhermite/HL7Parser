import { MessageHeader } from '../Segments/MessageHeader.ts';
import { SoftwareSegment } from '../Segments/SoftwareSegment.ts';
import { UserAuthenticationCredentialSegment } from '../Segments/UserAuthenticationCredentialSegment.ts';
import { PatientIdentification } from '../Segments/PatientIdentification.ts';
import { EventTypeSegment } from '../Segments/EventTypeSegment.ts';
import { PatientVisit } from '../Segments/PatientVisit.ts';

/**
 * HL7 v2.8 - ADT_A31 - Update person information
 *
 * An A31 event can be used to update person information on an MPI. It is similar to an A08 (update patient information) event, but an A08 (update patient information) event should be used to update patient information for a current episode. An A28 (add person information) or A31 can also be used for backloading MPI information for the person, or for backloading person and historical information.
 *
 * To maintain backward compatibility with previous releases, the PV1 segment is required. However, a "pseudo-optional" PV1 can be achieved by valuing PV1-2 - Patient Class to N - not applicable.
 *
 * The ROL - Role Segment is used in this message to communicate providers not specified elsewhere. Person level providers with an ongoing relationship are reported in the ROL segment following the PID/PD1 segments. Providers corresponding to the PV1 data are reported in the ROL segment following the PV1/PV2 segments. Providers related to a specific procedure are reported in the ROL segment following the PR1 segment. Providers related to a specific insurance are reported in the ROL segment following the IN1/IN2/IN3 segments. To communicate the begin and end date of the provider, use the ROL-5 - Role Begin Date/Time and the ROL-6 - Role End Date/Time in the ROL segment, with the applicable ROL-3 - Role Code. Refer to Chapter 15 for the definition of the ROL segment.
 *
 */
export type ADT_A31 = {
    MSH: MessageHeader;
    SFT: SoftwareSegment[];
    UAC?: UserAuthenticationCredentialSegment;
    EVN: EventTypeSegment;
    PID: PatientIdentification;
    PV1: PatientVisit;
};
