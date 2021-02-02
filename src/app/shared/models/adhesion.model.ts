import { CoordonneesBancairesModel } from './coordonnees-bancaires.model';
import { SouscriptionLieeModel } from './souscriptionLiee.Model';
import { StructureCotisationModel } from './structure-cotisation.model';

// Les adhesions sont en réalité des affiliations,
// c'était une erreur de faire un disctinction et de créer un objet Affiliation contentant des adhésions.
// Cette erreur est due au fait que la class AffiliationModel a été créée à cause du terme tunnel d'affiliation
// qui définit l'affiliation comme un tout alors qu'en réalité il y en a plusieurs
// TODO A renommer en AffiliationModel
export class AdhesionModel {
  clauseBeneficiaire: string;
  codeRisque: string;
  compteCotisation: CoordonneesBancairesModel;
  cotisationFractionnement: string;
  cotisationPaiementJour: string;
  cotisationPaiementMode: string;
  cotisationPeriodicite: string;
  dateAffiliation: Date;
  dateAffiliationFormule: Date;
  dateAffiliationPortabilite: Date;
  dateSortiePortabilite: Date;
  dateProchaineEcheance: string;
  dateResiliation: Date;
  description: string;
  dureePortabilite: number;
  etatCode: number;
  isConjointAllowedFromEntreprise: boolean;
  isConjointAllowedFromSalarie: boolean;
  isContratResilie: boolean;
  isDsnAuthorized: boolean;
  isEnfantAllowedFromEntreprise: boolean;
  isEnfantAllowedFromSalarie: boolean;
  isPortabilite: boolean;
  motifResiliation: string;
  numeroContrat: string;
  numeroContratLong: string;
  numeroFormule: string;
  questionnaireRisque?: QuestionnaireRisque;
  souscripteurGrcId: string;
  souscriptionLieeEnCours: SouscriptionLieeModel;
  souscriptionsLiees: SouscriptionLieeModel[];
  statut: number;
  structureCotisation: StructureCotisationModel;
  tauxAnnuel: number;
  tauxDeductible: number;
  etatBase: string;
}

export class QuestionnaireRisque {
  isArretTravail: boolean;
  isCumulEmploiRetraite: boolean;
  salaireAnnuelBrut: number;
}
