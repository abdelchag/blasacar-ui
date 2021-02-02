export class FaqObjetModel {
  id: number;
  libelle: string;
  ordre: number;
  code: string;
  defaultMessage: string;
  isContratMigre: boolean;
  isContratSante: boolean;
  isContratPrevoyance: boolean;
  isTacheAgenda: boolean;
  faqSousObjets: FaqObjetModel[];
  showEspaceApporteur: boolean;
  showEspaceClient: boolean;
}
