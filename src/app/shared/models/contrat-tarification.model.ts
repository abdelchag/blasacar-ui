import { DocumentModel } from './document.model';

export class ContratTarificationModel {
  id: number;
  libelle: string;
  conditionsGenerales: DocumentModel[];
  documentsGestion: DocumentModel[];
}
