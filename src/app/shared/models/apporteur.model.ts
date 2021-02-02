import { AdresseModel } from './adresse.model';

export interface ApporteurModel {
  adresse: AdresseModel;
  clevaId: number | null;
  email: string;
  grcId: string;
  isPrincipal: boolean;
  nom: string;
  prenom: string;
  raisonSociale: string;
  role: string;
  telephone: string;
}
