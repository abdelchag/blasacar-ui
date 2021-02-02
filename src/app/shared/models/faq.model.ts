import { FaqFiltreAffichageModel } from './faq-filtre-affichage.model';
import { FaqGroupeModel } from './faq-groupe.model';

export class FaqModel {
  code: string;
  faqFiltreAffichage: FaqFiltreAffichageModel;
  faqFiltreAffichageId?: number;
  faqGroupe: FaqGroupeModel;
  faqGroupeId: number;
  id: number;
  isClosed: boolean;
  isContratAffaireNouvelle: boolean;
  isContratMigre: boolean;
  ordre: number;
  question: string;
  reponse: string;
}
