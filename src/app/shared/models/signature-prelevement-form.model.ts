import { FileUploadModel } from 'src/app/shared/models';

import { PrelevementFormModel } from './prelevement-form.model';

export interface SignaturePrelevementFormModel extends PrelevementFormModel {
  email: string;
  iban?: string;
  rib?: FileUploadModel;
  titulaire?: string;
  telephonePortable: string;
}
