import { OrganismeRattachementModel } from './organisme-rattachement.model';

export class RegimeObligatoireUpdateModel {
  dateDebutRoMin?: Date;
  numeroSecuriteSociale?: string;
  organismeRattachement: OrganismeRattachementModel;
  grcId?: string;
}
