import { CoordonneesBancairesModel } from './coordonnees-bancaires.model';
import { PersonneModel } from './personne.model';

export class SalarieModel extends PersonneModel {

  comptePrestation: CoordonneesBancairesModel;
  hasTeletransmission = false;
  statut: string;

  constructor() {
    super();
  }

}
