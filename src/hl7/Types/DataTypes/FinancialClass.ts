import { Datetime } from '../Tables/Datetime.ts';
import { CodedWithExceptions } from './CodedWithExceptions.ts';

/**
 * HL7 v2.8 - FC - Financial Class
 *
 * FC.1 - Financial Class Code  --  0  CWE  Required  Single
 * FC.2 - Effective Date  --------  0  DTM  Optional  Single
 */
export type FinancialClass = {
  financialClassCode: CodedWithExceptions; // FC.1
  effectiveDate?: Datetime; // FC.2
};
