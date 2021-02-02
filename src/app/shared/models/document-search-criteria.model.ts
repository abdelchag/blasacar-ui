export class DocumentSearchCriteriaModel {
  documentCodes: string[];
  numeroContrat?: string[];
  constructor() {
    this.documentCodes = [];
    this.numeroContrat = [];
  }
}
