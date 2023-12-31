/**
 *
 * HL7 Standard Tables - Tables defined by the HL7 organization. Most tables in this category are related to the standard and its message structures.
 *
 * <pre>
 * ACK  General acknowledgment message
 * ADR  ADT response
 * ADT  ADT message
 * BAR  Add/change billing account
 * BPS  Blood product dispense status message
 * BRP  Blood product dispense status acknowledgement message
 * BRT  Blood product transfusion/disposition acknowledgement message
 * BTS  Blood product transfusion/disposition message
 * CCF  Collaborative Care Fetch
 * CCI  Collaborative Care Information
 * CCM  Collaborative Care Message
 * CCQ  Collaborative Care Referral
 * CCU  Collaborative Care Referral
 * CQU  Collaborative Care Referral
 * CRM  Clinical study registration message
 * CSU  Unsolicited study data message
 * DFT  Detail financial transactions
 * DOC  Document response
 * DSR  Display response
 * EAC  Automated equipment command message
 * EAN  Automated equipment notification message
 * EAR  Automated equipment response message
 * EHC  Health Care Invoice
 * ESR  Automated equipment status update acknowledgment message
 * ESU  Automated equipment status update message
 * INR  Automated equipment inventory request message
 * INU  Automated equipment inventory update message
 * LSR  Automated equipment log/service request message
 * LSU  Automated equipment log/service update message
 * MDM  Medical document management
 * MFD  Master files delayed application acknowledgment
 * MFK  Master files application acknowledgment
 * MFN  Master files notification
 * MFQ  Master files query
 * MFR  Master files response
 * NMD  Application management data message
 * NMQ  Application management query message
 * NMR  Application management response message
 * OMB  Blood product order message
 * OMD  Dietary order
 * OMG  General clinical order message
 * OMI  Imaging order
 * OML  Laboratory order message
 * OMN  Non-stock requisition order message
 * OMP  Pharmacy/treatment order message
 * OMS  Stock requisition order message
 * OPL  Population/Location-Based Laboratory Order Message
 * OPR  Population/Location-Based Laboratory Order Acknowledgment Message
 * OPU  Unsolicited Population/Location-Based Laboratory Observation Message
 * ORA  Observation Report Acknowledgment
 * ORB  Blood product order acknowledgement message
 * ORD  Dietary order acknowledgment message
 * ORF  Query for results of observation
 * ORG  General clinical order acknowledgment message
 * ORI  Imaging order acknowledgement message
 * ORL  Laboratory acknowledgment message (unsolicited)
 * ORM  Pharmacy/treatment order message
 * ORN  Non-stock requisition - General order acknowledgment message
 * ORP  Pharmacy/treatment order acknowledgment message
 * ORR  General order response message response to any ORM
 * ORS  Stock requisition - Order acknowledgment message
 * ORU  Unsolicited transmission of an observation message
 * OSM  Specimen Shipment Message
 * OSQ  Query response for order status
 * OSR  Query response for order status
 * OUL  Unsolicited laboratory observation message
 * PEX  Product experience message
 * PGL  Patient goal message
 * PIN  Patient insurance information
 * PMU  Add personnel record
 * PPG  Patient pathway message (goal-oriented)
 * PPP  Patient pathway message (problem-oriented)
 * PPR  Patient problem message
 * PPT  Patient pathway goal-oriented response
 * PPV  Patient goal response
 * PRR  Patient problem response
 * PTR  Patient pathway problem-oriented response
 * QBP  Query by parameter
 * QCK  Deferred query
 * QCN  Cancel query
 * QRY  Query, original mode
 * QSB  Create subscription
 * QSX  Cancel subscription/acknowledge message
 * QVR  Query for previous events
 * RAR  Pharmacy/treatment administration information
 * RAS  Pharmacy/treatment administration message
 * RCI  Return clinical information
 * RCL  Return clinical list
 * RDE  Pharmacy/treatment encoded order message
 * RDR  Pharmacy/treatment dispense information
 * RDS  Pharmacy/treatment dispense message
 * RDY  Display based response
 * REF  Patient referral
 * RER  Pharmacy/treatment encoded order information
 * RGR  Pharmacy/treatment dose information
 * RGV  Pharmacy/treatment give message
 * ROR  Pharmacy/treatment order response
 * RPA  Return patient authorization
 * RPI  Return patient information
 * RPL  Return patient display list
 * RPR  Return patient list
 * RQA  Request patient authorization
 * RQC  Request clinical information
 * RQI  Request patient information
 * RQP  Request patient demographics
 * RRA  Pharmacy/treatment administration acknowledgment message
 * RRD  Pharmacy/treatment dispense acknowledgment message
 * RRE  Pharmacy/treatment encoded order acknowledgment message
 * RRG  Pharmacy/treatment give acknowledgment message
 * RRI  Return referral information
 * RSP  Segment pattern response
 * RTB  Tabular response
 * SCN  Notification of Anti-Microbial Device Cycle Data
 * SDN  Notification of Anti-Microbial Device Data
 * SDR  Sterilization anti-microbial device data request
 * SIU  Schedule information unsolicited
 * SLN  Notification of New Sterilization Lot
 * SLR  Sterilization lot request
 * SMD  Sterilization anti-microbial device cycle data request
 * SQM  Schedule query message
 * SQR  Schedule query response
 * SRM  Schedule request message
 * SRR  Scheduled request response
 * SSR  Specimen status request message
 * SSU  Specimen status update message
 * STC  Notification of Sterilization Configuration
 * STI  Sterilization item request
 * SUR  Summary product experience report
 * TBR  Tabular data response
 * TCR  Automated equipment test code settings request message
 * TCU  Automated equipment test code settings update message
 * UDM  Unsolicited display update message
 * VXQ  Query for vaccination record
 * VXR  Vaccination record response
 * VXU  Unsolicited vaccination record update
 * VXX  Response for vaccination query with multiple PID matches
 * </pre>
 */
export type MessageCode =
  | "ACK"
  | "ADR"
  | "ADT"
  | "BAR"
  | "BPS"
  | "BRP"
  | "BRT"
  | "BTS"
  | "CCF"
  | "CCI"
  | "CCM"
  | "CCQ"
  | "CCU"
  | "CQU"
  | "CRM"
  | "CSU"
  | "DFT"
  | "DOC"
  | "DSR"
  | "EAC"
  | "EAN"
  | "EAR"
  | "EHC"
  | "ESR"
  | "ESU"
  | "INR"
  | "INU"
  | "LSR"
  | "LSU"
  | "MDM"
  | "MFD"
  | "MFK"
  | "MFN"
  | "MFQ"
  | "MFR"
  | "NMD"
  | "NMQ"
  | "NMR"
  | "OMB"
  | "OMD"
  | "OMG"
  | "OMI"
  | "OML"
  | "OMN"
  | "OMP"
  | "OMS"
  | "OPL"
  | "OPR"
  | "OPU"
  | "ORA"
  | "ORB"
  | "ORD"
  | "ORF"
  | "ORG"
  | "ORI"
  | "ORL"
  | "ORM"
  | "ORN"
  | "ORP"
  | "ORR"
  | "ORS"
  | "ORU"
  | "OSM"
  | "OSQ"
  | "OSR"
  | "OUL"
  | "PEX"
  | "PGL"
  | "PIN"
  | "PMU"
  | "PPG"
  | "PPP"
  | "PPR"
  | "PPT"
  | "PPV"
  | "PRR"
  | "PTR"
  | "QBP"
  | "QCK"
  | "QCN"
  | "QRY"
  | "QSB"
  | "QSX"
  | "QVR"
  | "RAR"
  | "RAS"
  | "RCI"
  | "RCL"
  | "RDE"
  | "RDR"
  | "RDS"
  | "RDY"
  | "REF"
  | "RER"
  | "RGR"
  | "RGV"
  | "ROR"
  | "RPA"
  | "RPI"
  | "RPL"
  | "RPR"
  | "RQA"
  | "RQC"
  | "RQI"
  | "RQP"
  | "RRA"
  | "RRD"
  | "RRE"
  | "RRG"
  | "RRI"
  | "RSP"
  | "RTB"
  | "SCN"
  | "SDN"
  | "SDR"
  | "SIU"
  | "SLN"
  | "SLR"
  | "SMD"
  | "SQM"
  | "SQR"
  | "SRM"
  | "SRR"
  | "SSR"
  | "SSU"
  | "STC"
  | "STI"
  | "SUR"
  | "TBR"
  | "TCR"
  | "TCU"
  | "UDM"
  | "VXQ"
  | "VXR"
  | "VXU"
  | "VXX";
