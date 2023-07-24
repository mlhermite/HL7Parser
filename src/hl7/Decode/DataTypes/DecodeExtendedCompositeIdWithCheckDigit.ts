import { HL7Settings, HL7Type } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { string } from 'typescript-json-decoder';
import { decodeCheckDigitScheme } from '../Tables/DecodeCheckDigitScheme.ts';
import { decodeHierarchicDesignator } from './DecodeHierarchicDesignator.ts';
import { decodeIdentifierType } from '../Tables/DecodeIdentifierType.ts';
import { ExtendedCompositeIdWithCheckDigit } from '../../Types/DataTypes/ExtendedCompositeIdWithCheckDigit.ts';
import { decodeCodedWithExceptions } from './DecodeCodedWithExceptions.ts';
import { decodeSecurityCheckScheme } from '../Tables/DecodeSecurityCheckScheme.ts';
import { decodeDateValue } from '../Tables/DecodeDateValue.ts';

export const decodeExtendedCompositeIdWithCheckDigit = (type: HL7Type, settings: HL7Settings) =>
  arrayWithContext(
    'ExtendedCompositeIdWithCheckDigit (CX)',
    type,
    settings,
    (data: unknown[]): ExtendedCompositeIdWithCheckDigit => ({
      idNumber: reqComponent('CX.1', 0, string, data[0]),
      identifierCheckDigit: optComponent('CX.2', 0, string, data[1]),
      checkDigitScheme: optComponent('CX.3', 0, decodeCheckDigitScheme, data[2]),
      assigningAuthority: optComponent('CX.4', 0, decodeHierarchicDesignator('component', settings), data[3]),
      identifierTypeCode: reqComponent('CX.5', 0, decodeIdentifierType, data[4]),
      assigningFacility: optComponent('CX.6', 0, decodeHierarchicDesignator('component', settings), data[5]),
      effectiveDate: optComponent('CX.7', 0, decodeDateValue, data[6]),
      expirationDate: optComponent('CX.8', 0, decodeDateValue, data[7]),
      assigningJurisdiction: optComponent('CX.9', 0, decodeCodedWithExceptions('component', settings), data[8]),
      assigningAgencyOrDepartment: optComponent('CX.10', 0, decodeCodedWithExceptions('component', settings), data[9]),
      securityCheck: optComponent('CX.11', 0, string, data[10]),
      securityCheckScheme: optComponent('CX.12', 0, decodeSecurityCheckScheme, data[11]),
    }),
  );
