import { ApporteurModel } from './apporteur.model';

export class ContratModel {
  apporteurs: ApporteurModel[];
  codeProduit: string;
  codeRisque: string;
  collegeObjectifCode: string;
  collegeCode: string;
  cotisationPaiementJour: number;
  cotisationPaiementMode: string;
  cotisationPeriodicite: string;
  dateCreation: Date;
  dateEffet: Date;
  dateFinTaux: Date;
  dateResiliation: Date;
  dateMiseEnDemeure: Date;
  dateProchaineEcheance: Date;
  dateSuspension: Date;
  description: string;
  id: number;
  isActif: boolean;
  isFromMigration: boolean;
  isExtension: boolean;
  isMiseEnDemeure: boolean;
  isNonPrecompte: boolean;
  isOption: boolean;
  isPortabilite: boolean;
  isResilie: boolean;
  isSuspendu: boolean;
  montantPmssMensuel: number;
  numeroContrat: string;
  numeroContratLong: string;
  statut: number;
}
