import { CpVilleModel, PaysModel } from '.';


export class AdresseModel {
  adresse: string;
  codePays: string;
  codePostal: string;
  codePostalVille: CpVilleModel;
  complementAdresse1: string;
  complementAdresse2: string;
  dateDebutValidite?: Date;
  dateFinValidite?: Date;
  historiqueId?: number;
  historiqueTopPrincipalId?: Date;
  id: number;
  isAdressePrincipale: boolean;
  isNpai: boolean;
  lieuDit: string;
  typologieCode: string;
  ville: string;
  pays: PaysModel;
  codePostalVilleAdresseEtrangere: string;
  libellePays: string;
}

export class AdresseParameter {
  adresses: AdresseModel[];
  grcid: string;
}
