import { AffiliationNewModel } from './affiliation-new.model';
import { PersonneModel } from './personne.model';

export class SalarieNewModel {
  personne: PersonneModel;
  affiliations: AffiliationNewModel[] = [];
}
