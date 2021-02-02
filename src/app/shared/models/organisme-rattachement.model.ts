import { FileUploadModel } from './file-upload.model';

export class OrganismeRattachementModel {
  codeRegime: string;
  codeCaisse: string;
  codeCentre: string;
  idPersonneRattachement?: number;
  justificatif?: FileUploadModel;
}
