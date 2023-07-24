/**
 *
 * HL7 v2.8 - 0190 - Address Type
 *
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * B  Firm/Business
 * BA  Bad address
 * BDL  Birth delivery location (address where birth occurred)
 * BI  Billing Address
 * BR  Residence at birth (home address at time of birth)
 * C  Current Or Temporary
 * F  Country Of Origin
 * H  Home
 * L  Legal Address
 * M  Mailing
 * N  Birth (nee) (birth address, not otherwise specified)
 * O  Office/Business
 * P  Permanent
 * RH  Registry home. Refers to the information system, typically managed by a public health agency, that stores patient information such as immunization histories or cancer data, regardless of where the patient obtains services.
 * S  Service Location
 * SH  Shipping Address
 * TM  Tube Address
 * V  Vacation
 */
export type AddressType = 'B' | 'BA' | 'BDL' | 'BI' | 'BR' | 'C' | 'F' | 'H' | 'L' | 'M' | 'N' | 'O' | 'P' | 'RH' | 'S' | 'SH' | 'TM' | 'V';
