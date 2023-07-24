import { HL7Settings } from '../../utils/HL7Settings.ts';
import { arrayWithContext, optComponent, reqComponent } from '../../utils/DecoderUtils.ts';
import { ErrorSegment } from '../../Types/Segments/ErrorSegment.ts';
import { string } from 'typescript-json-decoder';
import { decodeExtendedOrganizationIdentifier } from '../DataTypes/DecodeExtendedOrganizationIdentifier.ts';
import { decodeDatetime } from '../Tables/DecodeDatetime.ts';
import { SoftwareSegment } from '../../Types/Segments/SoftwareSegment.ts';

export const decodeSoftwareSegment = (settings: HL7Settings) =>
  arrayWithContext(
    'SoftwareSegment (SFT)',
    'segment',
    settings,
    (data): SoftwareSegment => ({
      softwareVendorOrganization: reqComponent('SFT.1', 0, decodeExtendedOrganizationIdentifier('component', settings), data[1]),
      softwareCertifiedVersionOrReleaseNumber: reqComponent('SFT.2', 0, string, data[2]),
      softwareProductName: reqComponent('SFT.3', 0, string, data[3]),
      softwareBinaryId: reqComponent('SFT.4', 0, string, data[4]),
      softwareProductInformation: optComponent('SFT.5', 0, string, data[5]),
      softwareInstallDate: optComponent('SFT.6', 0, decodeDatetime, data[6]),
    }),
  );
