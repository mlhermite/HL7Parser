import { Datetime } from '../Tables/Datetime.ts';
import { CodedWithExceptions } from '../DataTypes/CodedWithExceptions.ts';
import { ExtendedCommunicationNumber } from '../DataTypes/ExtendedCommunicationNumber.ts';
import { HierarchicDesignator } from '../DataTypes/HierarchicDesignator.ts';
import { YesNoIndicator } from '../Tables/YesNoIndicator.ts';
import { ExtendedCompositeIdWithCheckDigit } from '../DataTypes/ExtendedCompositeIdWithCheckDigit.ts';
import { ExtendedPersonName } from '../DataTypes/ExtendedPersonName.ts';
import { ExtendedAddress } from '../DataTypes/ExtendedAddress.ts';

/**
 * HL7 v2.8 - PID - Patient Identification
 *
 * The PID segment is used by all applications as the primary means of communicating patient identification information. This segment contains permanent patient identifying and demographic information that, for the most part, is not likely to change frequently.
 *
 * It should be noted that from V2.4 onwards the demographics of animals can also be sent in the PID segment (see PID-35 to PID-38).
 *
 * The assigning authority, the fourth component of the patient identifiers, is a HD data type that is uniquely associated with the assigning authority that originally assigned the number. A given institution, or group of intercommunicating institutions, should establish a list of assigning authorities that may be potential assignors of patient identification (and other important identification) numbers. The list will be one of the institution's master dictionary lists. Since third parties (other than the assignors of patient identification numbers) may send or receive HL7 messages containing patient identification numbers, the assigning authority in the patient identification numbers may not be the same as the sending and receiving systems identified in the MSH. The assigning authority must be unique across applications at a given site. This field is required in HL7 implementations that have more than a single Patient Administration application assigning such numbers. The assigning authority and identifier type codes are strongly recommended for all CX data types.
 *
 * With HL7 V2.3, the nomenclature for the fourth component of the patient identifiers was changed from "assigning facility ID" to "assigning authority". While the identifier may be unique to a given healthcare facility (for example, a medical record assigned by facility A in Hospital XYZ), the identifier might also be assigned at a system level (for example a corporate person index or enterprise number spanning multiple facilities) or by a government entity, for example a nationally assigned unique individual identifier. While a facility is usually an assigning authority, not all assigning authorities are facilities. Therefore, the fourth component is referred to as an assigning authority, but retains backward compatibility using the construct of the HD data type (see the note in chapter 2). Additionally, CX data types support the use of assigning facility (HD) as the sixth component.
 *
 * <pre>
 * PID.1 - Set Id - Pid  ----------------------------  4  SI   Optional   Single
 * PID.2 - Patient Id  ------------------------------  0  ST   Withdrawn  Single
 * PID.3 - Patient Identifier List  -----------------  0  CX   Required   Multiple
 * PID.4 - Alternate Patient Id - Pid  --------------  0  ST   Withdrawn  Single
 * PID.5 - Patient Name  ----------------------------  0  XPN  Required   Multiple
 * PID.6 - Mother's Maiden Name  --------------------  0  XPN  Optional   Multiple
 * PID.7 - Date/Time Of Birth  ----------------------  0  DTM  Optional   Single
 * PID.8 - Administrative Sex  ----------------------  0  CWE  Optional   Single
 * PID.9 - Patient Alias  ---------------------------  0  ST   Withdrawn  Single
 * PID.10 - Race  -----------------------------------  0  CWE  Optional   Multiple
 * PID.11 - Patient Address  ------------------------  0  XAD  Optional   Multiple
 * PID.12 - County Code  ----------------------------  0  ST   Withdrawn  Single
 * PID.13 - Phone Number - Home  --------------------  0  XTN  Optional   Multiple
 * PID.14 - Phone Number - Business  ----------------  0  XTN  Optional   Multiple
 * PID.15 - Primary Language  -----------------------  0  CWE  Optional   Single
 * PID.16 - Marital Status  -------------------------  0  CWE  Optional   Single
 * PID.17 - Religion  -------------------------------  0  CWE  Optional   Single
 * PID.18 - Patient Account Number  -----------------  0  CX   Optional   Single
 * PID.19 - Ssn Number - Patient  -------------------  0  ST   Withdrawn  Single
 * PID.20 - Driver's License Number - Patient  ------  0  ST   Withdrawn  Single
 * PID.21 - Mother's Identifier  --------------------  0  CX   Optional   Multiple
 * PID.22 - Ethnic Group  ---------------------------  0  CWE  Optional   Multiple
 * PID.23 - Birth Place  ----------------------------  0  ST   Optional   Single
 * PID.24 - Multiple Birth Indicator  ---------------  1  ID   Optional   Single
 * PID.25 - Birth Order  ----------------------------  0  NM   Optional   Single
 * PID.26 - Citizenship  ----------------------------  0  CWE  Optional   Multiple
 * PID.27 - Veterans Military Status  ---------------  0  CWE  Optional   Single
 * PID.28 - Nationality  ----------------------------  0  ST   Withdrawn  Single
 * PID.29 - Patient Death Date And Time  ------------  0  DTM  Optional   Single
 * PID.30 - Patient Death Indicator  ----------------  1  ID   Optional   Single
 * PID.31 - Identity Unknown Indicator  -------------  1  ID   Optional   Single
 * PID.32 - Identity Reliability Code  --------------  0  CWE  Optional   Multiple
 * PID.33 - Last Update Date/Time  ------------------  0  DTM  Optional   Single
 * PID.34 - Last Update Facility  -------------------  0  HD   Optional   Single
 * PID.35 - Taxonomic Classification Code  ----------  0  CWE  Cond       Single
 * PID.36 - Breed Code  -----------------------------  0  CWE  Cond       Single
 * PID.37 - Strain  ---------------------------------  0  ST   Optional   Single
 * PID.38 - Production Class Code  ------------------  0  CWE  Optional   Multiple
 * PID.39 - Tribal Citizenship  ---------------------  0  CWE  Optional   Multiple
 * PID.40 - Patient Telecommunication Information  --  0  XTN  Optional   Multiple
 * </pre>
 */
export type PatientIdentification = {
  setId: number; //PID.1
  patientId?: string; //PID.2
  patientIdentifierList: ExtendedCompositeIdWithCheckDigit[]; //PID.3
  alternatePatientId?: string; //PID.4
  patientName: ExtendedPersonName[]; //PID.5
  mothersMaidenName: ExtendedPersonName[]; //PID.6
  datetimeOfBirth?: Datetime; //PID.7
  administrativeSex?: CodedWithExceptions; //PID.8
  patientAlias?: string; //PID.9
  race: CodedWithExceptions[]; //PID.10
  patientAddress: ExtendedAddress[]; //PID.11
  countyCode?: string; //PID.12
  phoneNumberHome: ExtendedCommunicationNumber[]; //PID.13
  phoneNumberBusiness: ExtendedCommunicationNumber[]; //PID.14
  primaryLanguage?: CodedWithExceptions; //PID.15
  maritalStatus?: CodedWithExceptions; //PID.16
  religion?: CodedWithExceptions; //PID.17
  patientAccountNumber?: ExtendedCompositeIdWithCheckDigit; //PID.18
  ssnNumber?: string; //PID.19
  driversLicenseNumber?: string; //PID.20
  mothersIdentifier: ExtendedCompositeIdWithCheckDigit[]; //PID.21
  ethnicGroup: CodedWithExceptions[]; //PID.22
  birthPlace?: string; //PID.23
  multipleBirthIndicator?: YesNoIndicator; //PID.24
  birthOrder?: number; //PID.25
  citizenship: CodedWithExceptions[]; //PID.26
  veteransMilitaryStatus?: CodedWithExceptions; //PID.27
  nationality?: string; //PID.28
  patientDeathDateAndTime?: Datetime; //PID.29
  patientDeathIndicator?: YesNoIndicator; //PID.30
  identityUnknownIndicator?: YesNoIndicator; //PID.31
  identityReliabilityCode: CodedWithExceptions[]; //PID.32
  lastUpdate?: Datetime; //PID.33
  lastUpdateFacility?: HierarchicDesignator; //PID.34
  taxonomicClassificationCode?: CodedWithExceptions; //PID.35
  breedCode?: CodedWithExceptions; //PID.36
  strain?: string; //PID.37
  productionClassCode: CodedWithExceptions[]; //PID.38
  tribalCitizenship: CodedWithExceptions[]; //PID.39
  patientTelecommunicationInformation: ExtendedCommunicationNumber[]; //PID.40
};
