import { ApporteurModel } from './apporteur.model';

export class FaqMailModel {
  faqObjetCode: string;
  numeroContrat: string;
  faqSousObjetCode: string;
  message: string;
  piecesJointes: { [key: string]: any };
  apporteurPrincipal: ApporteurModel;
  isForApporteur: boolean;
}
