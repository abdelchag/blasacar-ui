import { FileUploadModel } from './file-upload.model';
import { PieceDossierModel } from './piece-dossier.model';

export class JustificatifToUploadModel {
  piecesPossibles: PieceDossierModel[];
  piece: PieceDossierModel;
  titre: string;
  isObligatoire: boolean;
  utilisateurConnecte: string;
  justificatif: FileUploadModel;
  complementsJustificatif: FileUploadModel[];
}
