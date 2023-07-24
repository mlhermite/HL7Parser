import { MessageHeader } from "../Segments/MessageHeader.ts";
import { SoftwareSegment } from "../Segments/SoftwareSegment.ts";
import { UserAuthenticationCredentialSegment } from "../Segments/UserAuthenticationCredentialSegment.ts";
import { EventTypeSegment } from "../Segments/EventTypeSegment.ts";
import { PatientIdentification } from "../Segments/PatientIdentification.ts";
import { PatientVisit } from "../Segments/PatientVisit.ts";

/**
 * HL7 v2.8 - ADT_A01 - Admit/visit notification
 *
 * An A01 event is intended to be used for "Admitted" patients only. An A01 event is sent as a result of a patient undergoing the admission process which assigns the patient to a bed. It signals the beginning of a patient's stay in a healthcare facility. Normally, this information is entered in the primary Patient Administration system and broadcast to the nursing units and ancillary systems. It includes short stay and "Adam Everyman" (e.g., patient name is unknown) admissions. For example, an A01 event can be used to notify: the pharmacy system that a patient has been admitted and may be legitimately prescribed drugs; thenursing system that the patient has been admitted and needs a care plan prepared; the finance system of the start of the billing period; the dietary system that a new patient has been installed and requires dietary services; the laboratory, pathology, and radiology systems that a patient has been admitted and is entitled to receive services; the clinical repository that an admission has taken place for the EMR (electronic medical record).
 *
 * When an account's start and end dates span a period greater than any particular visit, the P01 (add patient account) event should be used to transmit the opening of an account. The A01 event can notify systems of the creation of an account as well as notify them of a patient's arrival in the healthcare facility. In order to create a new account without notifying of patient's arrival, use the P01 event.
 *
 * The ROL - Role Segment is used in this message to communicate providers not specified elsewhere. Person level providers with an ongoing relationship are reported in the ROL segment following the PID/PD1 segments. Providers corresponding to the PV1 data are reported in the ROL segment following the PV1/PV2 segments. Providers related to a specific procedure are reported in the ROL segment following the PR1 segment. Providers related to a specific insurance are reported in the ROL segment following the IN1/IN2/IN3 segments. To communicate the begin and end date of the provider, use the ROL-5 - Role Begin Date/Time and the ROL-6 - Role End Date/Time in the ROL segment, with the applicable ROL-3 - Role Code. Refer to Chapter 15 for the definition of the ROL segment.
 *
 * <pre>
 *
 * </pre>
 */
export type ADT_A01 = {
  MSH: MessageHeader;
  SFT: SoftwareSegment[];
  UAC?: UserAuthenticationCredentialSegment;
  EVN: EventTypeSegment;
  PID: PatientIdentification;
  PV1: PatientVisit;
};
