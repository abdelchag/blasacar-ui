import { ApporteurModel } from './apporteur.model';
import { CoordonneesBancairesModel } from './coordonnees-bancaires.model';
import { ModeleAdhesionModel } from './modele-adhesion.model';

export class AdhesionTnsModel {
  apporteurs: ApporteurModel[];
  cotisationCompte: CoordonneesBancairesModel;
  id: number;
  isActif: boolean;
  isFromMigration: boolean;
  isMadelin: boolean;
  isMadelinTotal: boolean;
  entrepriseId: number;
  mcrCode: string;
  modeleAdhesionCode: string;
  modeleAdhesions: ModeleAdhesionModel[];
  montantPmssMensuel: number;
  numeroContrat: string;
  numeroContratLong: string;
  prestationsModePaiement: string;
  prestationsTypologieId: number;
  souscripteurGrcId: string;
  statut: number;
  structureCotisation: string;
  tauxAnnuel: number;
  tauxDeductible: number;
  cotisationPaiementMode: string;
  codeRisque: string;
}
