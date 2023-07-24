import { CodedWithExceptions } from './CodedWithExceptions.ts';
import { VersionID } from '../Tables/VersionID.ts';

/**
 * <pre>
 * VID.1 - Version Id  -----------------  5  ID   Required  Single
 * VID.2 - Internationalization Code  --  0  CWE  Optional  Single
 * VID.3 - International Version Id  ---  0  CWE  Optional  Single
 * </pre>
 */
export type VersionIdentifier = {
  versionId: VersionID;
  internationalizationCode?: CodedWithExceptions;
  internationalVersionId?: CodedWithExceptions;
};
