import { Datetime } from '../Tables/Datetime.ts';
import { ExtendedOrganizationIdentifier } from '../DataTypes/ExtendedOrganizationIdentifier.ts';

/**
 *
 * HL7 v2.8 - SFT - Software Segment
 *
 * This segment provides additional information about the software product(s) used as a Sending Application. The primary purpose of this segment is for diagnostic use. There may be additional uses per site-specific agreements.
 *
 * Implementers are encouraged to use message profile identifiers (as found in 2.14.9.21, "MSH-21 Message Profile Identifier (EI) 01598") to control the behavior of the receiving application rather than relying on application or version information in the SFT segment.
 *
 * For example, if software product A has versions 9 and 10 deployed in different Enterprise locations, the fact that they use different message types, segments, or fields should be reflected via their message profiles (see section 2B, "Conformance Using Message Profiles"). If there is an upgrade from version 10 to 10.1, this would be reflected in the SFT segment, but changes to the message contents should be reflected via a new/different conformance profile.
 *
 * Use Case: An external application has been customized to communicate with a centralized patient drug history system. However, due to certain, known characteristics of the external software package, the centralized system must modify its behavior in order to process transactions correctly. In one example, the external application may have multiple versions in production. As such, the centralized application will need to know the name of the Software Vendor Organization, the Software Release Number, the Software Product Name, and the Software Binary ID so that it can correctly identify the software submitting the transaction and modify its behavior appropriately.
 *
 * While preparing a transaction for submission to a centralized system the sending application specifies its Software Install Date and its configuration settings (Software Product Information).
 * While processing the transaction, the centralized system encounters an error. Upon examination of the error, install date and configuration of the software that sent the message, helpdesk staff are able to determine the sending application has not been updated to reflect recent application changes.
 *
 * Use Case: In circumstances where a message is manipulated or modified by multiple systems, a repetition of this segment may be appended by each system.
 *
 * <pre>
 * SFT.1 - Software Vendor Organization  ------------------  0  XON  Required  Single
 * SFT.2 - Software Certified Version Or Release Number  --  0  ST   Required  Single
 * SFT.3 - Software Product Name  -------------------------  0  ST   Required  Single
 * SFT.4 - Software Binary Id  ----------------------------  0  ST   Required  Single
 * SFT.5 - Software Product Information  ------------------  0  TX   Optional  Single
 * SFT.6 - Software Install Date  -------------------------  0  DTM  Optional  Single
 * </pre>
 *
 */
export type SoftwareSegment = {
  softwareVendorOrganization: ExtendedOrganizationIdentifier; // SFT.1
  softwareCertifiedVersionOrReleaseNumber: string; // SFT.2
  softwareProductName: string; // SFT.3
  softwareBinaryId: string; // SFT.4
  softwareProductInformation?: string; // SFT.5
  softwareInstallDate?: Datetime; // SFT.6
};
