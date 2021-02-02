import { PersonneModel } from './personne.model';
import { UtilisateurModel } from './utilisateur.model';

export interface ProfilModel {
  client: PersonneModel;
  code: string;
  utilisateur: UtilisateurModel;
}
