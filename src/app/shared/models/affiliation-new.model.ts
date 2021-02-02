import { QuestionnaireRisque } from './adhesion.model';
import { AyantDroitModel } from './ayant-droit.model';
import { CoordonneesBancairesModel } from './coordonnees-bancaires.model';

export class AffiliationNewModel {
  ayantsDroit: AyantDroitModel[] = [];
  collegeCode: string;
  cotisationPaiementMode: string;
  dateDebut: Date;
  dateEmbauche: Date | string;
  dateFin: Date;
  etat: string;
  formule: string;
  motifResiliation: string;
  numeroContrat: string;
  isPrecompte: boolean;
  prestationCompte: CoordonneesBancairesModel;
  questionnaireRisque?: QuestionnaireRisque;
  risqueCode: string;
  tauxAnnuel: number;
  tauxDeductible: number;
}
