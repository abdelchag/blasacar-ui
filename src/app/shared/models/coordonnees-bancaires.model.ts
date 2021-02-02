import { FileUploadModel } from './file-upload.model';

export class CoordonneesBancairesModel {
  id?: number;
  typologieId?: number;
  banque?: string;
  extraitNumeroCompte?: string;
  iban?: string;
  isEntreprise?: boolean;
  rib?: FileUploadModel;
  titulaire?: string;
}
