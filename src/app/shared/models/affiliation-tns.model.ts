import { AyantDroitModel } from './ayant-droit.model';

export class AffiliationTnsModel {
  dateDebut: string;
  dateFin: string;
  clauseBeneficiaire: string;
  ayantsDroit: AyantDroitModel[];
}
