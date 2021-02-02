import { EcheanceModel } from './echeance.model';

export class CotisationModel {
  numeroContrat: string;
  echeances: EcheanceModel[];
  prochaineEcheance: EcheanceModel;
  rejetEncaissement: EcheanceModel;
  encaissements: EcheanceModel[];
}
