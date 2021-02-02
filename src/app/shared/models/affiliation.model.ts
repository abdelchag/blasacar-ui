import { AdhesionModel } from './adhesion.model';
import { AyantDroitModel } from './ayant-droit.model';
import { CoordonneesBancairesModel } from './coordonnees-bancaires.model';
import { SalarieModel } from './salarie.model';

export class AffiliationModel {

  adhesions: AdhesionModel[];
  // TOTO Déplacer dans AdhesionModel
  ayantsDroit: AyantDroitModel[];
  collegeCode: string;
  isPortabilite: boolean;
  isPortabilitePrevoyance: boolean;
  isAgeAndCumulRetraite: boolean;
  salarie: SalarieModel;
  prestationRib: CoordonneesBancairesModel;
  dateEmbauche: Date;
  etape: string;

  constructor() {
    this.adhesions = [];
    this.salarie = new SalarieModel();
    this.ayantsDroit = [];
    this.prestationRib = new CoordonneesBancairesModel();
  }
}
