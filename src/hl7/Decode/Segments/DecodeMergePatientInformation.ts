import { HL7Settings } from '../../utils/HL7Settings.ts';
import { arrayWithContext, listComponent, optComponent } from '../../utils/DecoderUtils.ts';
import { PatientIdentification } from '../../Types/Segments/PatientIdentification.ts';
import { string } from 'typescript-json-decoder';
import { MergePatientInformation } from '../../Types/Segments/MergePatientInformation.ts';
import { decodeExtendedPersonName } from '../DataTypes/DecodeExtendedPersonName.ts';
import { decodeExtendedCompositeIdWithCheckDigit } from '../DataTypes/DecodeExtendedCompositeIdWithCheckDigit.ts';

export const decodeMergePatientInformation = (settings: HL7Settings) =>
  arrayWithContext(
    'MergePatientInformation (MRG)',
    'segment',
    settings,
    (data): MergePatientInformation => ({
      priorPatientIdentifierList: listComponent(
        'MRG.1',
        decodeExtendedCompositeIdWithCheckDigit('component', settings),
        'infinite',
        false,
        data[1],
        settings,
      ),
      priorAlternatePatientId: optComponent('MRG.2', 0, string, data[2]),
      priorPatientAccountNumber: optComponent('MRG.3', 0, decodeExtendedCompositeIdWithCheckDigit('component', settings), data[3]),
      priorPatientId: optComponent('MRG.4', 0, string, data[4]),
      priorVisitNumber: optComponent('MRG.5', 0, decodeExtendedCompositeIdWithCheckDigit('component', settings), data[5]),
      priorAlternateVisitId: optComponent('MRG.6', 0, decodeExtendedCompositeIdWithCheckDigit('component', settings), data[6]),
      priorPatientName: listComponent('MRG.7', decodeExtendedPersonName('component', settings), 'infinite', false, data[7], settings),
    }),
  );
