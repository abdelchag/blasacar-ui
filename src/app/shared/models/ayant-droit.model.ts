import { CoordonneesBancairesModel } from './coordonnees-bancaires.model';
import { PersonneModel } from './personne.model';
import { RattachementRoModel } from './rattachement-ro.model';

export class AyantDroitModel extends PersonneModel {

  canShowRangNaissance: boolean;
  dateEntree: Date | string;
  dateUnion: Date | string;
  dateRadiation?: Date;
  hasRattachementRoChanged?: boolean;
  hasTeletransmission: boolean;
  comptePrestation: CoordonneesBancairesModel;
  modeReglement: string;
  isEnAttenteDroits: boolean;
  qualite: string;
  rattachementRo: RattachementRoModel;
  statut: string;
  created: number;
  canCompletAyantDroit: boolean;

  constructor() {
    super();
    this.created = Date.now();
  }

}
