import { CodedWithExceptions } from '../DataTypes/CodedWithExceptions.ts';
import { EncapsulatedData } from '../DataTypes/EncapsulatedData.ts';

/**
 *
 * HL7 v2.8 - UAC - User Authentication Credential Segment
 *
 * This optional segment provides user authentication credentials, a Kerberos Service Ticket or SAML assertion, to be used by the receiving system to obtain user identification data. Refer to HL7 Table 0615 - User Authentication Credential Type Code. It is to be used in when the receiving application system requires the sending system to provide end-user identification for accountability or access control in interactive applications. Since user authentication implementations often limit the time period for validity of the session authentication credentials, this segment is not intended for use in non-interactive applications.
 *
 * It is possible that various user authentication credential standards' data may be communicated. Kerberos and SAML are two such standards. A user authentication credential is an encapsulated data (ED type) element, as defined by standards, with no HL7-relevant structure.
 *
 * Note: The UAC segment is defined for use within simple protocols, such as MLLP, that do not have user authentication semantics. Implementations that use WSDL/SOAP, or similar protocols, to envelope HL7 should employ the user authentication semantics and data structures available within the scope of those protocols rather than the UAC segment.
 *
 * If the receiving system accepts the user credentials in the UAC segment, no specific acknowledgement is required. However, if the receiving system detects an error while processing the UAC segment, its acknowledgment message shall report it to the sender via an MSA and ERR segment pair:
 * - The ERR-3 (error code) field value is 207 to signify an application error
 * - The ERR-7 (diagnostic information) field reports the specific error. Examples of possible errors are:
 * - User credentials expected but not provided
 * - User credentials invalid
 * - User credentials expired
 * - User credentials from an unknown or untrusted source
 * - User unknown
 * - User not allowed to create or access data on the receiving system.
 * - User not allowed to initiate a processing function on the receiving system.
 *
 * When an MSA and ERR segment pair is reported to the sender, an application data response shall not occur. In such cases it is correct to assume that the sending application's user is not authorized to get the data.
 *
 * The processing rules for the ERR segment are outside of HL7's scope.
 *
 * <pre>
 * UAC.1 - User Authentication Credential Type Code  --  0  CWE  Required  Single
 * UAC.2 - User Authentication Credential  ------------  0  ED   Required  Single
 * </pre>
 *
 */
export type UserAuthenticationCredentialSegment = {
  userAuthenticationCredentialTypeCode: CodedWithExceptions; // UAC.1
  userAuthenticationCredential: EncapsulatedData; // UAC.2
};
