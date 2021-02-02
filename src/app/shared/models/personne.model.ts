import { AdresseModel } from './adresse.model';
import { CoordonneesBancairesModel } from './coordonnees-bancaires.model';
import { OrganismeRattachementModel } from './organisme-rattachement.model';

export class PersonneModel {

  /** Représente une adresse provisoire à cause du formulaire */
  adresse?: AdresseModel;

  adresses?: AdresseModel[];
  clevaId: number;
  codeCivilite: string;
  codeSituationFamiliale: string;
  coordonneesBancaires: CoordonneesBancairesModel[];
  dateNaissance: Date;
  dateDebutRoMin?: Date | string;
  genre: string;
  grcId: string;
  isPersonneMorale: boolean;
  mailPersonnel: string;
  mailProfessionnel: string;
  nom: string;
  numeroSecuriteSociale: string;
  organismeRattachement: OrganismeRattachementModel;
  prenom: string;
  rangNaissance: string;
  regimesObligatoiresRattachement: OrganismeRattachementModel[];
  siret: string;
  tcsId: number;
  telephoneDomicile: string;
  telephonePortable: string;
  telephoneProfessionnel: string;
  representantLegalInternet: string;
  hasTeletransmission: boolean;

  constructor() {
    this.adresses = [];
  }

  isClientBanque?: boolean;
}
