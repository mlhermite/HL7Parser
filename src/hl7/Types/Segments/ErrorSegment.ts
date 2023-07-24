import { CodedWithExceptions } from '../DataTypes/CodedWithExceptions.ts';
import { ErrorLocation } from '../DataTypes/ErrorLocation.ts';
import { ErrorSeverity } from '../Tables/ErrorSeverity.ts';
import { ExtendedCommunicationNumber } from '../DataTypes/ExtendedCommunicationNumber.ts';

/**
 *
 * HL7 v2.8 - ERR - Error
 *
 * Use Cases:
 * Severity: A receiving application needs to communicate 2 "error or exception statements." One is an "error;" the other is a "warning". To accomplish this, an acknowledgement message with 2 ERR segments is sent. Upon receipt, the sending application can display both, including the appropriate severity, to the user.
 *
 * Application Error Code: A receiving application generates an error that reports an application error code and returns this information in its response. This code in turn is used by helpdesk staff to pinpoint the exact cause of the error, or by the application to prompt an appropriate response from the user. (Ex. Deceased date must be greater than or equal to birth date).
 *
 * Application Error Parameter: A receiving application encounters an error during processing of a transaction. In addition to an error code, the application provides an error parameter that gives greater detail as to the exact nature of the error. The receiving application looks up the message corresponding to the error code, substitutes in the parameter, and displays the resulting message to the user.
 *
 * Diagnostic Information: While processing a transaction, a receiving application encounters an exception. When the exception is thrown, it provides a volume of detailed information relating to the error encountered. The receiving application captures the information and sends it in its response. The user reports the error to the help desk, and on request, faxes a copy of the diagnostic information to assist analyzing the problem.
 *
 * User Message: A user executes an application function that generates a transaction that is sent to another application for further processing. During this processing, the receiving application encounters an error and, as part of the error handling routine, retrieves a User Message that it returns in its response. The originating application receives the error and displays it to the end user with the intent that the error condition can be resolved and the user can re-execute the function without error.
 *
 * Inform Person Code: After submitting a dispense transaction, a response is returned to the user indicating that the patient may be abusing drugs. Given the sensitivity of this warning, the error is returned with an indicator stating that the patient should not be informed of the error with the implication that steps should be taken to rule out or confirm the warning.
 *
 * Override Type: If a business rule states that a prescription on hold cannot be dispensed, an override type might be "Dispense Held Prescription" to allow the prescription to be dispensed in exception to the rule.
 *
 * Override Reason Codes: A patient is given a prescription; however, before completing the prescription, the remaining pills are spoiled. The patient returns to their pharmacy and explains the situation to their pharmacist. The pharmacist decides to replace the spoiled drugs; however, when attempting to record the event, a message is returned indicating that the dispense would exceed the maximum amount prescribed. The pharmacist overrides the rule and specifies an Override Reason Code indicating a replacement of lost product.
 *
 * Help Desk Contact: Help desk contact information is stored in a database. When an application error is encountered, the database is queried and the most current help desk contact information is returned in the error message. This is displayed to the user by the receiving application.
 *
 * Better Error Location Information: Receiving system detects an error with the 3rd repetition of the ROL.4 (Role Person - XCN).16 (Name Context – CE).4(Alternate Identifier – CWE). The application identifies the specific repetition and component when raising the error, simplifying diagnosis of the problem.
 *
 * Support for multiple Error Locations: Two fields are marked as conditional, with the condition that one of the two must be specified. The sending application leaves both blank. The receiving application detects the problem, and sends back a single error indicating that one of the fields must be filled in. The ERR segment identifies both positions within the message that relate to the error. *
 *
 * <pre>
 * ERR.1 - Error Code And Location  ------  0  ST   Withdrawn  Single
 * ERR.2 - Error Location  ---------------  0  ERL  Optional   Multiple
 * ERR.3 - Hl7 Error Code  ---------------  0  CWE  Required   Single
 * ERR.4 - Severity  ---------------------  1  ID   Required   Single
 * ERR.5 - Application Error Code  -------  0  CWE  Optional   Single
 * ERR.6 - Application Error Parameter  --  0  ST   Optional   Multiple
 * ERR.7 - Diagnostic Information  -------  0  TX   Optional   Single
 * ERR.8 - User Message  -----------------  0  TX   Optional   Single
 * ERR.9 - Inform Person Indicator  ------  0  CWE  Optional   Multiple
 * ERR.10 - Override Type  ---------------  0  CWE  Optional   Single
 * ERR.11 - Override Reason Code  --------  0  CWE  Optional   Multiple
 * ERR.12 - Help Desk Contact Point  -----  0  XTN  Optional   Multiple
 * </pre>
 *
 */
export type ErrorSegment = {
  errorCodeAndLocation?: string; // ERR.1
  errorLocation: ErrorLocation[]; // ERR.2
  hl7ErrorCode: CodedWithExceptions; // ERR.3
  severity: ErrorSeverity; // ERR.4
  applicationErrorCode?: CodedWithExceptions; // ERR.5
  applicationErrorParameter: string[]; // ERR.6
  diagnosticInformation?: string; // ERR.7
  userMessage?: string; // ERR.8
  informPersonIndicator: CodedWithExceptions[]; // ERR.9
  overrideType?: CodedWithExceptions; // ERR.10
  overrideReasonCode: CodedWithExceptions[]; // ERR.11
  helpDeskContactPoint: ExtendedCommunicationNumber[]; // ERR.12
};
