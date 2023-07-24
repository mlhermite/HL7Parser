import { ExtendedCompositeIdWithCheckDigit } from '../DataTypes/ExtendedCompositeIdWithCheckDigit.ts';
import { ExtendedPersonName } from '../DataTypes/ExtendedPersonName.ts';

/**
 *
 * HL7 v2.8 - MRG - Merge Patient Information
 *
 * The MRG segment provides receiving applications with information necessary to initiate the merging of patient data as well as groups of records. It is intended that this segment be used throughout the Standard to allow the merging of registration, accounting, and clinical records within specific applications.
 *
 * The assigning authority, the fourth component of the patient identifiers, is an HD data type that is uniquely associated with the assigning authority that originally assigned the number. A given institution, or group of intercommunicating institutions, should establish a list of assigning authorities that may be potential assignors of patient identification (and other important identification) numbers. The list will be one of the institution's master dictionary lists. Since third parties (other than the assignors of patient identification numbers) may send or receive HL7 messages containing patient identification numbers, the assigning authority in the patient identification numbers may not be the same as those of the sending and receiving systems identified in the MSH. The assigning authority must be unique across applications at a given site. This field is required in HL7 implementations that have more than a single Patient Administration application assigning such numbers.
 *
 * MRG.1 - Prior Patient Identifier List  --  0  CX   Required   Multiple
 * MRG.2 - Prior Alternate Patient Id  -----  0  ST   Withdrawn  Single
 * MRG.3 - Prior Patient Account Number  ---  0  CX   Optional   Single
 * MRG.4 - Prior Patient Id  ---------------  0  ST   Withdrawn  Single
 * MRG.5 - Prior Visit Number  -------------  0  CX   Optional   Single
 * MRG.6 - Prior Alternate Visit Id  -------  0  CX   Optional   Single
 * MRG.7 - Prior Patient Name  -------------  0  XPN  Optional   Multiple
 */
export type MergePatientInformation = {
  priorPatientIdentifierList: ExtendedCompositeIdWithCheckDigit[]; // MRG.1
  priorAlternatePatientId?: string; // MRG.2
  priorPatientAccountNumber?: ExtendedCompositeIdWithCheckDigit; // MRG.3
  priorPatientId?: string; // MRG.4
  priorVisitNumber?: ExtendedCompositeIdWithCheckDigit; // MRG.5
  priorAlternateVisitId?: ExtendedCompositeIdWithCheckDigit; // MRG.6
  priorPatientName: ExtendedPersonName[]; // MRG.7
};
