import { HL7Settings } from '../../utils/HL7Settings.ts';
import { arrayWithContext, float, listComponent, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { PatientVisit } from '../../Types/Segments/PatientVisit.ts';
import { number, string } from 'typescript-json-decoder';
import { decodeCodedWithExceptions } from '../DataTypes/DecodeCodedWithExceptions.ts';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { decodePersonLocation } from '../DataTypes/DecodePersonLocation.ts';
import { decodeExtendedCompositeIdWithCheckDigit } from '../DataTypes/DecodeExtendedCompositeIdWithCheckDigit.ts';
import { decodeFinancialClass } from '../DataTypes/DecodeFinancialClass.ts';
import { decodeDateValue } from '../Tables/DecodeDateValue.ts';
import { decodeDischargeToLocationAndDate } from '../DataTypes/DecodeDischargeToLocationAndDate.ts';
import { decodeExtendedCompositeIdName } from '../DataTypes/DecodeExtendedCompositeIdName.ts';

export const decodePatientVisit = (settings: HL7Settings) =>
  arrayWithContext(
    'PatientVisit (PV1)',
    'segment',
    settings,
    (data): PatientVisit => ({
      setId: optComponent('PV1.1', 0, string, data[1]),
      patientClass: reqComponent('PV1.2', 0, decodeCodedWithExceptions('component', settings), data[2]),
      assignedPatientLocation: optComponent('PV1.3', 0, decodePersonLocation('component', settings), data[3]),
      admissionType: optComponent('PV1.4', 0, decodeCodedWithExceptions('component', settings), data[4]),
      preadmitNumber: optComponent('PV1.5', 0, decodeExtendedCompositeIdWithCheckDigit('component', settings), data[5]),
      priorPatientLocation: optComponent('PV1.6', 0, decodePersonLocation('component', settings), data[6]),
      attendingDoctor: listComponent('PV1.7', decodeExtendedCompositeIdName('component', settings), 'infinite', false, data[7], settings),
      referringDoctor: listComponent('PV1.8', decodeExtendedCompositeIdName('component', settings), 'infinite', false, data[8], settings),
      consultingDoctor: listComponent('PV1.9', decodeExtendedCompositeIdName('component', settings), 'infinite', false, data[9], settings),
      hospitalService: optComponent('PV1.10', 0, decodeCodedWithExceptions('component', settings), data[10]),
      temporaryLocation: optComponent('PV1.11', 0, decodePersonLocation('component', settings), data[11]),
      preadmitTestIndicator: optComponent('PV1.12', 0, decodeCodedWithExceptions('component', settings), data[12]),
      readmissionIndicator: optComponent('PV1.13', 0, decodeCodedWithExceptions('component', settings), data[13]),
      admitSource: optComponent('PV1.14', 0, decodeCodedWithExceptions('component', settings), data[14]),
      ambulatoryStatus: listComponent('PV1.15', decodeCodedWithExceptions('component', settings), 'infinite', false, data[15], settings),
      vipIndicator: optComponent('PV1.16', 0, decodeCodedWithExceptions('component', settings), data[16]),
      admittingDoctor: listComponent('PV1.17', decodeExtendedCompositeIdName('component', settings), 'infinite', false, data[17], settings),
      patientType: optComponent('PV1.18', 0, decodeCodedWithExceptions('component', settings), data[18]),
      visitNumber: optComponent('PV1.19', 0, decodeExtendedCompositeIdWithCheckDigit('component', settings), data[19]),
      financialClass: listComponent('PV1.20', decodeFinancialClass('component', settings), 'infinite', false, data[20], settings),
      chargePriceIndicator: optComponent('PV1.21', 0, decodeCodedWithExceptions('component', settings), data[21]),
      courtesyCode: optComponent('PV1.22', 0, decodeCodedWithExceptions('component', settings), data[22]),
      creditRating: optComponent('PV1.23', 0, decodeCodedWithExceptions('component', settings), data[23]),
      contractCode: listComponent('PV1.24', decodeCodedWithExceptions('component', settings), 'infinite', false, data[24], settings),
      contractEffectiveDate: listComponent('PV1.25', decodeDatetime, 'infinite', false, data[25], settings),
      contractAmount: listComponent('PV1.26', float, 'infinite', false, data[26], settings),
      contractPeriod: listComponent('PV1.27', float, 'infinite', false, data[27], settings),
      interestCode: optComponent('PV1.28', 0, decodeCodedWithExceptions('component', settings), data[28]),
      transferToBadDebtCode: optComponent('PV1.29', 0, decodeCodedWithExceptions('component', settings), data[29]),
      transferToBadDebtDate: optComponent('PV1.30', 0, decodeDateValue, data[30]),
      badDebtAgencyCode: optComponent('PV1.31', 0, decodeCodedWithExceptions('component', settings), data[31]),
      badDebtTransferAmount: optComponent('PV1.32', 0, float, data[32]),
      badDebtRecoveryAmount: optComponent('PV1.33', 0, float, data[33]),
      deleteAccountIndicator: optComponent('PV1.34', 0, decodeCodedWithExceptions('component', settings), data[34]),
      deleteAccountDate: optComponent('PV1.35', 0, decodeDateValue, data[35]),
      dischargeDisposition: optComponent('PV1.36', 0, decodeCodedWithExceptions('component', settings), data[36]),
      dischargedToLocation: optComponent('PV1.37', 0, decodeDischargeToLocationAndDate('component', settings), data[37]),
      dietType: optComponent('PV1.38', 0, decodeCodedWithExceptions('component', settings), data[38]),
      servicingFacility: optComponent('PV1.39', 0, decodeCodedWithExceptions('component', settings), data[39]),
      bedStatus: optComponent('PV1.40', 0, string, data[40]),
      accountStatus: optComponent('PV1.41', 0, decodeCodedWithExceptions('component', settings), data[41]),
      pendingLocation: optComponent('PV1.42', 0, decodePersonLocation('component', settings), data[42]),
      priorTemporaryLocation: optComponent('PV1.43', 0, decodePersonLocation('component', settings), data[43]),
      admitDatetime: optComponent('PV1.44', 0, decodeDatetime, data[44]),
      dischargeDatetime: optComponent('PV1.45', 0, decodeDatetime, data[45]),
      currentPatientBalance: optComponent('PV1.46', 0, float, data[46]),
      totalCharges: optComponent('PV1.47', 0, float, data[47]),
      totalAdjustments: optComponent('PV1.48', 0, float, data[48]),
      totalPayments: optComponent('PV1.49', 0, float, data[49]),
      alternateVisitId: optComponent('PV1.50', 0, decodeExtendedCompositeIdWithCheckDigit('component', settings), data[50]),
      visitIndicator: optComponent('PV1.51', 0, decodeCodedWithExceptions('component', settings), data[51]),
      otherHealthcareProvider: optComponent('PV1.52', 0, string, data[52]),
      serviceEpisodeDescription: optComponent('PV1.53', 0, string, data[53]),
      serviceEpisodeIdentifier: optComponent('PV1.54', 0, decodeExtendedCompositeIdWithCheckDigit('component', settings), data[54]),
    }),
  );
