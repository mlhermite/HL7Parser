import { ProcessingID } from '../Tables/ProcessingID.ts';
import { ProcessingMode } from '../Tables/ProcessingMode.ts';

/**
 * This data type indicates whether to process a message as defined in HL7 Application (level 7) Processing rules.
 *
 * <pre>
 * PT.1 - Processing Id  ----  1  ID  Required  Single
 * PT.2 - Processing Mode  --  1  ID  Optional  Single
 * </pre>
 */
export type ProcessingType = {
  processingId: ProcessingID;
  processingMode?: ProcessingMode;
};
