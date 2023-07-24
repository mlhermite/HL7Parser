import { HierarchicDesignator } from './HierarchicDesignator.ts';
import { MIMETypes } from '../Tables/MIMETypes.ts';
import { SubtypeOfReferencedData } from '../Tables/SubtypeOfReferencedData.ts';
import { Encoding } from '../Tables/Encoding.ts';

/**
 *
 * This data type transmits encapsulated data from a source system to a destination system. It contains the identity of the source system, the type of data, the encoding method of the data, and the data itself. This data type is similar to the RP (reference pointer) data type of Section 2.A.65, "RP - reference pointer," except that instead of pointing to the data on another system, it contains the data which is to be sent to that system.
 *
 * ED.1 - Source Application  --  0   HD  Optional  Single
 * ED.2 - Type Of Data  --------  11  ID  Required  Single
 * ED.3 - Data Subtype  --------  0   ID  Optional  Single
 * ED.4 - Encoding  ------------  6   ID  Required  Single
 * ED.5 - Data  ----------------  0   TX  Required  Single
 */
export type EncapsulatedData = {
  sourceApplication?: HierarchicDesignator; // ED.1
  typeOfData: MIMETypes; // ED.2
  dataSubtype?: SubtypeOfReferencedData; // ED.3
  encoding: Encoding; // ED.4
  data: string; // ED.5
};
