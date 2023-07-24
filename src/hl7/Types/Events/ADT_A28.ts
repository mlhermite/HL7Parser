import { MessageHeader } from "../Segments/MessageHeader.ts";
import { SoftwareSegment } from "../Segments/SoftwareSegment.ts";
import { UserAuthenticationCredentialSegment } from "../Segments/UserAuthenticationCredentialSegment.ts";
import { PatientIdentification } from "../Segments/PatientIdentification.ts";
import { EventTypeSegment } from "../Segments/EventTypeSegment.ts";
import { PatientVisit } from "../Segments/PatientVisit.ts";

/**
 * HL7 v2.8 - ADT_A28 - Add person information
 *
 * The purpose of this and the three following messages was to allow sites with multiple systems and respective master patient databases to communicate activity related to a person regardless of whether that person is currently a patient on each system. Each system has an interest in the database activity of the others in order to maintain data integrity across an institution. Though they are defined within the ADT message set, these messages differ in that they are not patient-specific. To a certain registry, the person may be a person of interest, a potential future patient, or a potential guarantor. For example, these events can be used to maintain an MPI (master patient index), a cancer registry, members of a managed care plan, an HIV database, etc.
 *
 * These events should not replace the use of the A01 (admit/visit notification), A03 (discharge/end visit), A04 (register a patient), A08 (update patient information), etc., events. They are not intended to be used for notification of real-time Patient Administration events. These events are primarily for demographic data, but optional historical non-demographic data may be sent as well.
 *
 * The person whose data is being sent should be identified in the PID segment using the PID-3 - Patient Identifier List, even when the person is not a patient and may be a potential guarantor. An A28 establishes person identifiers, e.g., social security number, guarantor identifier, or other unique identifiers, and contains a person identifier in the PID-3 - Patient Identifier List. The person involved may or may not have active or inactive cases associated with them. When field names and descriptions say "patient," we must translate that to "person" for these transactions. In this manner, "person information" about a guarantor can be sent independently of the guarantor's relation to any patient.
 *
 * For example, a site with separate inpatient, outpatient and medical records systems may require that each system maintain concurrent person information. Prior to an admit, the new person is added to the master database of the inpatient system, resulting in the broadcast of a message. The outpatient system receives the message and adds the person to its database with the possibility that the person may someday become a patient in its system. The medical records system receives the message and adds the person to its database with the possibility that it will track inpatient, outpatient, or clinical data for that person. The clinical repository database or MPI receives the message to keep all potential patients and guarantors in its database.
 *
 * The A28 event can be used to send everything that is known about a person. For example, it can be sent to an ICU unit (in addition to the A02 (transfer a patient) event) when a patient is transferred to the ICU unit in order to backload all demographic information for the patient into the ICU system. An A28 (add person information) or A31 (update person information) can also be used for backloading MPI information for the person, or for backloading person and historical information.
 *
 * In addition to adding a person to a database, the delete, update, and merge messages work in a similar manner to maintain concurrent person information. It is left up to site-specific negotiations to decide how much data must be transmitted or re-transmitted when a person becomes a patient.
 * To maintain backward compatibility with previous releases, the PV1 segment is required. However, a "pseudo-optional" PV1 can be achieved by valuing PV1-2 - Patient Class to N - not applicable.
 *
 * The ROL - Role Segment is used in this message to communicate providers not specified elsewhere. Person level providers with an ongoing relationship are reported in the ROL segment following the PID/PD1 segments. Providers corresponding to the PV1 data are reported in the ROL segment following the PV1/PV2 segments. Providers related to a specific procedure are reported in the ROL segment following the PR1 segment. Providers related to a specific insurance are reported in the ROL segment following the IN1/IN2/IN3 segments. To communicate the begin and end date of the provider, use the ROL-5 - Role Begin Date/Time and the ROL-6 - Role End Date/Time in the ROL, with the applicable ROL-3 - Role Code. Refer to Chapter 15 for the definition of the ROL segment.
 */
export type ADT_A28 = {
  MSH: MessageHeader;
  SFT: SoftwareSegment[];
  UAC?: UserAuthenticationCredentialSegment;
  EVN: EventTypeSegment;
  PID: PatientIdentification;
  PV1: PatientVisit;
};
