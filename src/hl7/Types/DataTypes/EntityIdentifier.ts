import { NamespaceID } from '../Tables/NamespaceID.ts';
import { UniversalIDType } from '../Tables/UniversalIDType.ts';

/**
 *
 * The entity identifier defines a given entity within a specified series of identifiers.
 *
 * The EI is appropriate for, but not limited to, machine or software generated identifiers. The generated identifier goes in the first component. The remaining components, 2 through 4, are known as the assigning authority; they identify the machine/system responsible for generating the identifier in component 1.
 *
 * The specified series, the assigning authority, is defined by components 2 through 4. The assigning authority is of the hierarchic designator (HD) data type, but it is defined as three separate components in the EI data type, rather than as a single component as would normally be the case. This is in order to maintain backward compatibility with the EI’s use as a component in several existing data fields. Otherwise, the components 2 through 4 are as defined in Section 2.A.33, "HD - hierarchic designator". Hierarchic designators (HD) are unique across a given HL7 implementation.
 *
 * <pre>
 * EI.1 - Entity Identifier  --  0  ST  Optional     Single
 * EI.2 - Namespace Id  -------  0  IS  Optional     Single
 * EI.3 - Universal Id  -------  0  ST  Conditional  Single
 * EI.4 - Universal Id Type  --  6  ID  Conditional  Single
 * </pre>
 */
export type EntityIdentifier = {
  entityIdentifier?: string;
  namespaceId?: NamespaceID;
} & (
  | {
      universalId: string;
      universalIdType: UniversalIDType;
    }
  | {
      universalId: undefined;
      universalIdType: undefined;
    }
);
