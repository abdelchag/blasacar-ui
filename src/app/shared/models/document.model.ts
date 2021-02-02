import { StatutModel } from './statut.model';

export class DocumentModel {
  id: number;
  libelle: string;
  signatureStatus: string;
  statut: StatutModel;
  signatureCount: number;
  utilisateurId: number;
  data: string;
  dateCreation: Date;
  relativeDate: string;
  source: string;
  tarificationId: number;
  risqueCode: string;
  numeroContrat: string;
  type: string;
}
