import { ReferenceDossierModel } from './reference-dossier.model';

export class PieceDossierModel {
  codePiece: string;
  codeTypePiece: string;
  libelle: string;
  isPresente: boolean;
  isValide: boolean;
  isObligatoire: boolean;
  idDocumentGed: string;
  referenceDossiers: ReferenceDossierModel[];
  personneClevaId: string;
  contratClevaId: string;
  regleCollecte: string;
}
