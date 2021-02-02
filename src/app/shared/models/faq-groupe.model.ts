import { FaqFiltreAffichageModel } from './faq-filtre-affichage.model';
import { FaqModel } from './faq.model';

export class FaqGroupeModel {
  code: string;
  faqFiltreAffichage: FaqFiltreAffichageModel;
  faqFiltreAffichageId?: number;
  faqs: FaqModel[];
  id: number;
  libelle: string;
  ordre: number;
}
