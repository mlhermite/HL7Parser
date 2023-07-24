import { HL7Settings } from '../../utils/HL7Settings.ts';
import { arrayWithContext, reqComponent } from '../../utils/DecoderUtils.ts';
import { UserAuthenticationCredentialSegment } from '../../Types/Segments/UserAuthenticationCredentialSegment.ts';
import { decodeCodedWithExceptions } from '../DataTypes/DecodeCodedWithExceptions.ts';
import { decodeEncapsulatedData } from '../DataTypes/DecodeEncapsulatedData.ts';

export const decodeUserAuthenticationCredentialSegment = (settings: HL7Settings) =>
  arrayWithContext(
    'UserAuthenticationCredentialSegment (UAC)',
    'segment',
    settings,
    (data): UserAuthenticationCredentialSegment => ({
      userAuthenticationCredentialTypeCode: reqComponent('UAC.1', 0, decodeCodedWithExceptions('component', settings), data[1]),
      userAuthenticationCredential: reqComponent('UAC.2', 0, decodeEncapsulatedData('component', settings), data[2]),
    }),
  );
