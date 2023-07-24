import { CodedWithExceptions } from '../DataTypes/CodedWithExceptions.ts';
import { Datetime } from '../Tables/Datetime.ts';
import { ExtendedCompositeIdName } from '../DataTypes/ExtendedCompositeIdName.ts';
import { DateValue } from '../Tables/DateValue.ts';
import { ExtendedCompositeIdWithCheckDigit } from '../DataTypes/ExtendedCompositeIdWithCheckDigit.ts';
import { PersonLocation } from '../DataTypes/PersonLocation.ts';
import { FinancialClass } from '../DataTypes/FinancialClass.ts';
import { DischargeToLocationAndDate } from '../DataTypes/DischargeToLocationAndDate.ts';

/**
 *
 * HL7 v2.8 - PV1 - Patient Visit
 *
 *
 * The PV1 segment is used by Registration/Patient Administration applications to communicate information on an account or visit-specific basis. The default is to send account level data. To use this segment for visit level data PV1-51 - Visit Indicator must be valued to "V". The value of PV-51 affects the level of data being sent on the PV1, PV2, and any other segments that are part of the associated PV1 hierarchy (e.g., ROL, DG1, or OBX).
 *
 * The facility ID, the optional fourth component of each patient location field, is a HD data type that is uniquely associated with the healthcare facility containing the location. A given institution, or group of intercommunicating institutions, should establish a list of facilities that may be potential assignors of patient locations. The list will be one of the institution's master dictionary lists. Since third parties other than the assignors of patient locations may send or receive HL7 messages containing patient locations, the facility ID in the patient location may not be the same as that implied by the sending and receiving systems identified in the MSH. The facility ID must be unique across facilities at a given site. This field is required for HL7 implementations that have more than a single healthcare facility with bed locations, since the same <point of care> ^ <room> ^ <bed> combination may exist at more than one facility.
 *
 *
 * PV1.1 - Set Id - Pv1  ------------------  4  SI   Optional   Single
 * PV1.2 - Patient Class  -----------------  0  CWE  Required   Single
 * PV1.3 - Assigned Patient Location  -----  0  PL   Optional   Single
 * PV1.4 - Admission Type  ----------------  0  CWE  Optional   Single
 * PV1.5 - Preadmit Number  ---------------  0  CX   Optional   Single
 * PV1.6 - Prior Patient Location  ---- ---  0  PL   Optional   Single
 * PV1.7 - Attending Doctor  --------------  0  XCN  Optional   Multiple
 * PV1.8 - Referring Doctor  --------------  0  XCN  Optional   Multiple
 * PV1.9 - Consulting Doctor  -------------  0  XCN  Optional   Multiple
 * PV1.10 - Hospital Service  -------------  0  CWE  Optional   Single
 * PV1.11 - Temporary Location  -----------  0  PL   Optional   Single
 * PV1.12 - Preadmit Test Indicator  ------  0  CWE  Optional   Single
 * PV1.13 - Re-admission Indicator  -------  0  CWE  Optional   Single
 * PV1.14 - Admit Source  -----------------  0  CWE  Optional   Single
 * PV1.15 - Ambulatory Status  ------------  0  CWE  Optional   Multiple
 * PV1.16 - Vip Indicator  ----------------  0  CWE  Optional   Single
 * PV1.17 - Admitting Doctor  -------------  0  XCN  Optional   Multiple
 * PV1.18 - Patient Type  -----------------  0  CWE  Optional   Single
 * PV1.19 - Visit Number  -----------------  0  CX   Optional   Single
 * PV1.20 - Financial Class  --------------  0  FC   Optional   Multiple
 * PV1.21 - Charge Price Indicator  -------  0  CWE  Optional   Single
 * PV1.22 - Courtesy Code  ----------------  0  CWE  Optional   Single
 * PV1.23 - Credit Rating  ----------------  0  CWE  Optional   Single
 * PV1.24 - Contract Code  ----------------  0  CWE  Optional   Multiple
 * PV1.25 - Contract Effective Date  ------  0  DT   Optional   Multiple
 * PV1.26 - Contract Amount  --------------  0  NM   Optional   Multiple
 * PV1.27 - Contract Period  --------------  0  NM   Optional   Multiple
 * PV1.28 - Interest Code  ----------------  0  CWE  Optional   Single
 * PV1.29 - Transfer To Bad Debt Code  ----  0  CWE  Optional   Single
 * PV1.30 - Transfer To Bad Debt Date  ----  0  DT   Optional   Single
 * PV1.31 - Bad Debt Agency Code  ---------  0  CWE  Optional   Single
 * PV1.32 - Bad Debt Transfer Amount  -----  0  NM   Optional   Single
 * PV1.33 - Bad Debt Recovery Amount  -----  0  NM   Optional   Single
 * PV1.34 - Delete Account Indicator  -----  0  CWE  Optional   Single
 * PV1.35 - Delete Account Date  ----------  0  DT   Optional   Single
 * PV1.36 - Discharge Disposition  --------  0  CWE  Optional   Single
 * PV1.37 - Discharged To Location  -------  0  DLD  Optional   Single
 * PV1.38 - Diet Type  --------------------  0  CWE  Optional   Single
 * PV1.39 - Servicing Facility  -----------  0  CWE  Optional   Single
 * PV1.40 - Bed Status  -------------------  0  ST   Withdrawn  Single
 * PV1.41 - Account Status  ---------------  0  CWE  Optional   Single
 * PV1.42 - Pending Location  -------------  0  PL   Optional   Single
 * PV1.43 - Prior Temporary Location  -----  0  PL   Optional   Single
 * PV1.44 - Admit Date/Time  --------------  0  DTM  Optional   Single
 * PV1.45 - Discharge Date/Time  ----------  0  DTM  Optional   Single
 * PV1.46 - Current Patient Balance  ------  0  NM   Optional   Single
 * PV1.47 - Total Charges  ----------------  0  NM   Optional   Single
 * PV1.48 - Total Adjustments  ------------  0  NM   Optional   Single
 * PV1.49 - Total Payments  ---------------  0  NM   Optional   Single
 * PV1.50 - Alternate Visit Id  -----------  0  CX   Optional   Single
 * PV1.51 - Visit Indicator  --------------  0  CWE  Optional   Single
 * PV1.52 - Other Healthcare Provider  ----  0  ST   Withdrawn  Single
 * PV1.53 - Service Episode Description  --  0  ST   Optional   Single
 * PV1.54 - Service Episode Identifier  ---  0  CX   Optional   Single
 *
 */
export type PatientVisit = {
  setId?: string; // PV1.1
  patientClass: CodedWithExceptions; // PV1.2
  assignedPatientLocation?: PersonLocation; // PV1.3
  admissionType?: CodedWithExceptions; // PV1.4
  preadmitNumber?: ExtendedCompositeIdWithCheckDigit; // PV1.5
  priorPatientLocation?: PersonLocation; // PV1.6
  attendingDoctor: ExtendedCompositeIdName[]; // PV1.7
  referringDoctor: ExtendedCompositeIdName[]; // PV1.8
  consultingDoctor: ExtendedCompositeIdName[]; // PV1.9
  hospitalService?: CodedWithExceptions; // PV1.10
  temporaryLocation?: PersonLocation; // PV1.11
  preadmitTestIndicator?: CodedWithExceptions; // PV1.12
  readmissionIndicator?: CodedWithExceptions; // PV1.13
  admitSource?: CodedWithExceptions; // PV1.14
  ambulatoryStatus: CodedWithExceptions[]; // PV1.15
  vipIndicator?: CodedWithExceptions; // PV1.16
  admittingDoctor: ExtendedCompositeIdName[]; // PV1.17
  patientType?: CodedWithExceptions; // PV1.18
  visitNumber?: ExtendedCompositeIdWithCheckDigit; // PV1.19
  financialClass: FinancialClass[]; // PV1.20
  chargePriceIndicator?: CodedWithExceptions; // PV1.21
  courtesyCode?: CodedWithExceptions; // PV1.22
  creditRating?: CodedWithExceptions; // PV1.23
  contractCode: CodedWithExceptions[]; // PV1.24
  contractEffectiveDate: Datetime[]; // PV1.25
  contractAmount: number[]; // PV1.26
  contractPeriod: number[]; // PV1.27
  interestCode?: CodedWithExceptions; // PV1.28
  transferToBadDebtCode?: CodedWithExceptions; // PV1.29
  transferToBadDebtDate?: DateValue; // PV1.30
  badDebtAgencyCode?: CodedWithExceptions; // PV1.31
  badDebtTransferAmount?: number; // PV1.32
  badDebtRecoveryAmount?: number; // PV1.33
  deleteAccountIndicator?: CodedWithExceptions; // PV1.34
  deleteAccountDate?: DateValue; // PV1.35
  dischargeDisposition?: CodedWithExceptions; // PV1.36
  dischargedToLocation?: DischargeToLocationAndDate; // PV1.37
  dietType?: CodedWithExceptions; // PV1.38
  servicingFacility?: CodedWithExceptions; // PV1.39
  bedStatus?: string; // PV1.40
  accountStatus?: CodedWithExceptions; // PV1.41
  pendingLocation?: PersonLocation; // PV1.42
  priorTemporaryLocation?: PersonLocation; // PV1.43
  admitDatetime?: Datetime; // PV1.44
  dischargeDatetime?: Datetime; // PV1.45
  currentPatientBalance?: number; // PV1.46
  totalCharges?: number; // PV1.47
  totalAdjustments?: number; // PV1.48
  totalPayments?: number; // PV1.49
  alternateVisitId?: ExtendedCompositeIdWithCheckDigit; // PV1.50
  visitIndicator?: CodedWithExceptions; // PV1.51
  otherHealthcareProvider?: string; // PV1.52
  serviceEpisodeDescription?: string; // PV1.53
  serviceEpisodeIdentifier?: ExtendedCompositeIdWithCheckDigit; // PV1.54
};
