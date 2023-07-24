/**
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * <pre>
 * ACSN  Accession ID
 * AM  American Express
 * AMA  American Medical Association Number
 * AN  Account number
 * An Identifier for a provi
 * ANC  Account number Creditor
 * AND  Account number debitor
 * ANON  Anonymous identifier
 * ANT  Temporary Account Number
 * APRN  Advanced Practice Registered Nurse number
 * ASID  Ancestor Specimen ID
 * BA  Bank Account Number
 * BC  Bank Card Number
 * BCT  Birth Certificate
 * BR  Birth registry number
 * BRN  Breed Registry Number
 * BSNR  Primary physician office number
 * CC  Cost Center number
 * CONM  Change of Name Document
 * CY  County number
 * CZ  Citizenship Card
 * DDS  Dentist license number
 * DEA  Drug Enforcement Administration registration number
 * DFN  Drug Furnishing or prescriptive authority Number
 * DI  Diner's Club card
 * DL  Driver's license number
 * DN  Doctor number
 * DO  Osteopathic License number
 * DP  Diplomatic Passport
 * DPM  Podiatrist license number
 * DR  Donor Registration Number
 * DS  Discover Card
 * EI  Employee number
 * EN  Employer number
 * ESN  Staff Enterprise Number
 * FI  Facility ID
 * GI  Guarantor internal identifier
 * GL  General ledger number
 * GN  Guarantor external identifier
 * HC  Health Card Number
 * IND  Indigenous/Aboriginal
 * JHN  Jurisdictional health number (Canada)
 * LACSN  Laboratory Accession ID
 * LANR  Lifelong physician number
 * LI  Labor and industries number
 * LN  License number
 * LR  Local Registry ID
 * MA  Patient Medicaid number
 * MB  Member Number
 * MC  Patient's Medicare number
 * MCD  Practitioner Medicaid number
 * MCN  Microchip Number
 * MCR  Practitioner Medicare number
 * MCT  Marriage Certificate
 * MD  Medical License number
 * MI  Military ID number
 * MR  Medical record number
 * MRT  Temporary Medical Record Number
 * MS  MasterCard
 * NBSNR  Secondary physician office number
 * NCT  Naturalization Certificate
 * NE  National employer identifier
 * NH  National Health Plan Identifier
 * NI  National unique individual identifier
 * NII  National Insurance Organization Identifier
 * NIIP  National Insurance Payor Identifier (Payor)
 * NNxxx  National Person Identifier where the xxx is the ISO table 3166 3-character (alphabetic) country code
 * NP  Nurse practitioner number
 * NPI  National provider identifier
 * OD  Optometrist license number
 * PA  Physician Assistant number
 * PC  Parole Card
 * PCN  Penitentiary/correctional institution Number
 * PE  Living Subject Enterprise Number
 * PEN  Pension Number
 * PI  Patient internal identifier
 * PN  Person number
 * PNT  Temporary Living Subject Number
 * PPIN  Medicare/CMS Performing Provider Identification Number
 * PPN  Passport number
 * PRC  Permanent Resident Card Number
 * PRN  Provider number
 * PT  Patient external identifier
 * QA  QA number
 * RI  Resource identifier
 * RN  Registered Nurse Number
 * RPH  Pharmacist license number
 * RR  Railroad Retirement number
 * RRI  Regional registry ID
 * RRP  Railroad Retirement Provider
 * SID  Specimen ID
 * SL  State license
 * SN  Subscriber Number
 * SP  Study Permit
 * SR  State registry ID
 * SS  Social Security number
 * TAX  Tax ID number
 * TN  Treaty Number/ (Canada)
 * TPR  Temporary Permanent Resident (Canada)
 * U  Unspecified identifier
 * UPIN  Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers
 * USID  Unique Specimen ID
 * VN  Visit number
 * VP  Visitor Permit
 * VS  VISA
 * WC  WIC identifier
 * WCN  Workers' Comp Number
 * WP  Work Permit
 * XX  Organization identifier
 * </pre>
 */
export type IdentifierType =
  | 'ACSN'
  | 'AM'
  | 'AMA'
  | 'AN'
  | 'An'
  | 'ANC'
  | 'AND'
  | 'ANON'
  | 'ANT'
  | 'APRN'
  | 'ASID'
  | 'BA'
  | 'BC'
  | 'BCT'
  | 'BR'
  | 'BRN'
  | 'BSNR'
  | 'CC'
  | 'CONM'
  | 'CY'
  | 'CZ'
  | 'DDS'
  | 'DEA'
  | 'DFN'
  | 'DI'
  | 'DL'
  | 'DN'
  | 'DO'
  | 'DP'
  | 'DPM'
  | 'DR'
  | 'DS'
  | 'EI'
  | 'EN'
  | 'ESN'
  | 'FI'
  | 'GI'
  | 'GL'
  | 'GN'
  | 'HC'
  | 'IND'
  | 'JHN'
  | 'LACSN'
  | 'LANR'
  | 'LI'
  | 'LN'
  | 'LR'
  | 'MA'
  | 'MB'
  | 'MC'
  | 'MCD'
  | 'MCN'
  | 'MCR'
  | 'MCT'
  | 'MD'
  | 'MI'
  | 'MR'
  | 'MRT'
  | 'MS'
  | 'NBSNR'
  | 'NCT'
  | 'NE'
  | 'NH'
  | 'NI'
  | 'NII'
  | 'NIIP'
  | `NN${string}`
  | 'NP'
  | 'NPI'
  | 'OD'
  | 'PA'
  | 'PC'
  | 'PCN'
  | 'PE'
  | 'PEN'
  | 'PI'
  | 'PN'
  | 'PNT'
  | 'PPIN'
  | 'PPN'
  | 'PRC'
  | 'PRN'
  | 'PT'
  | 'QA'
  | 'RI'
  | 'RN'
  | 'RPH'
  | 'RR'
  | 'RRI'
  | 'RRP'
  | 'SID'
  | 'SL'
  | 'SN'
  | 'SP'
  | 'SR'
  | 'SS'
  | 'TAX'
  | 'TN'
  | 'TPR'
  | 'U'
  | 'UPIN'
  | 'USID'
  | 'VN'
  | 'VP'
  | 'VS'
  | 'WC'
  | 'WCN'
  | 'WP'
  | 'XX'
  | FrenchHL7;

type FrenchHL7 =
  | 'ADELI'
  | 'AN'
  | 'EI'
  | 'FINEG'
  | 'FINEJ'
  | 'IDNPS'
  | 'IDNST'
  | 'INS-A'
  | 'INS-C'
  | 'INS'
  | 'MR'
  | 'NH'
  | 'PI'
  | 'PN'
  | 'RI'
  | 'RMESS'
  | 'RPPS'
  | 'RRI'
  | 'SIREN'
  | 'SIRET'
  | 'SRV'
  | 'UF'
  | 'VN';
