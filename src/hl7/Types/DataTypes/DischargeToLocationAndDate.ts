import { Datetime } from '../Tables/Datetime.ts';
import { CodedWithExceptions } from './CodedWithExceptions.ts';

/**
 * HL7 v2.8 - DLD - Discharge To Location And Date
 *
 * DLD.1 - Discharge To Location  --  0  CWE  Required  Single
 * DLD.2 - Effective Date  ---------  0  DTM  Optional  Single
 */
export type DischargeToLocationAndDate = {
  dischargeToLocation: CodedWithExceptions; // DLD.1
  effectiveDate?: Datetime; // DLD.2
};
