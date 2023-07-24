import { MessageHeader } from "../Segments/MessageHeader.ts";
import { SoftwareSegment } from "../Segments/SoftwareSegment.ts";
import { UserAuthenticationCredentialSegment } from "../Segments/UserAuthenticationCredentialSegment.ts";
import { EventTypeSegment } from "../Segments/EventTypeSegment.ts";
import { PatientIdentification } from "../Segments/PatientIdentification.ts";
import { PatientVisit } from "../Segments/PatientVisit.ts";

/**
 * HL7 v2.8 - ADT_A05 - Pre-admit a patient
 *
 *
 * An A05 event is sent when a patient undergoes the pre-admission process. During this process, episode-related data is collected in preparation for a patient's visit or stay in a healthcare facility. For example, a pre-admit may be performed prior to inpatient or outpatient surgery so that lab tests can be performed prior to the surgery. This event can also be used to pre-register a non-admitted patient.
 *
 * The ROL - Role Segment is used in this message to communicate providers not specified elsewhere. Person level providers with an ongoing relationship are reported in the ROL segment following the PID/PD1 segments. Visit level providers (corresponding to the PV1 data) are reported in the ROL segment following the PV1/PV2 segments. Providers related to a specific procedure are reported in the ROL segment following the PR1 segment. Providers related to a specific insurance are reported in the ROL segment following the IN1/IN2/IN3 segments. To communicate the begin- and end-date of the provider, use the ROL-5 - Role Begin Date/Time and the ROL-6 - Role End Date/Time in the ROL segment, with the applicable ROL-3 - Role Code. Refer to Chapter 15 for the definition of the ROL segment.
 */
export type ADT_A05 = {
  MSH: MessageHeader;
  SFT: SoftwareSegment[];
  UAC?: UserAuthenticationCredentialSegment;
  EVN: EventTypeSegment;
  PID: PatientIdentification;
  PV1: PatientVisit;
};
