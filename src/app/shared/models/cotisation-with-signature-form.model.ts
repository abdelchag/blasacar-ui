import { CotisationFormModel } from './cotisation-form.model';
import { SignatureFormModel } from './signature-form.model';

export class CotisationWithSignatureFormModel extends CotisationFormModel {
  signature: SignatureFormModel;
}
