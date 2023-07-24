import { HierarchicDesignator } from './HierarchicDesignator.ts';
import { EntityIdentifier } from './EntityIdentifier.ts';

/**
 *
 * HL7 v2.8 - PL - Person Location
 *
 * This data type is used to specify a patient location within a healthcare institution. Which components are valued depends on the needs of the site. For example for a patient treated at home, only the person location type is valued. It is most commonly used for specifying patient locations, but may refer to other types of locations within a healthcare setting.
 *
 * Note: This data type contains several location identifiers that should be thought of in the following order from the most general to the most specific: facility, building, floor, point of care, room, bed.
 * Additional data about any location defined by these components can be added in the following components: person location type, location description and location status.
 *
 * Example: Nursing Unit
 * A nursing unit at Community Hospital: 4 East, room 136, bed B
 * 4E^136^B^CommunityHospital^^N^^^
 *
 * Example: Clinic
 * A clinic at University Hospitals: Internal Medicine Clinic located in the Briones building, 3rd floor.
 * InternalMedicine^^^UniversityHospitals^^C^Briones^3^
 *
 * Example: Home
 * The patient was treated at his home.
 * ^^^^^H^^^
 *
 * PL.1 - Point Of Care  -----------------------  0  HD  Cond      Single
 * PL.2 - Room  --------------------------------  0  HD  Optional  Single
 * PL.3 - Bed  ---------------------------------  0  HD  Optional  Single
 * PL.4 - Facility  ----------------------------  0  HD  Optional  Single
 * PL.5 - Location Status  ---------------------  0  IS  Optional  Single
 * PL.6 - Person Location Type  ----------------  0  IS  Optional  Single
 * PL.7 - Building  ----------------------------  0  HD  Optional  Single
 * PL.8 - Floor  -------------------------------  0  HD  Optional  Single
 * PL.9 - Location Description  ----------------  0  ST  Optional  Single
 * PL.10 - Comprehensive Location Identifier  --  0  EI  Optional  Single
 * PL.11 - Assigning Authority For Location  ---  0  HD  Optional  Single
 */
export type PersonLocation = {
  pointOfCare?: HierarchicDesignator; // PL.1
  room?: HierarchicDesignator; // PL.2
  bed?: HierarchicDesignator; // PL.3
  facility?: HierarchicDesignator; // PL.4
  locationStatus?: string; // PL.5
  personLocationType?: string; // PL.6
  building?: HierarchicDesignator; // PL.7
  floor?: HierarchicDesignator; // PL.8
  locationDescription?: string; // PL.9
  comprehensiveLocationIdentifier?: EntityIdentifier; // PL.10
  assigningAuthorityForLocation?: HierarchicDesignator; // PL.11
};
