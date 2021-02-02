export class FormaliteMedicaleProjetModel {
  formalitesMedicalesContrats: FormaliteMedicaleContratModel[];
}

export class FormaliteMedicaleContratModel {
  collegeCode: string;
  formalitesMedicales: FormaliteMedicaleInfoModel[];
}

export class FormaliteMedicaleInfoModel {
  formaliteMedicale: FormaliteMedicaleModel;
  montantTrancheDebut: number;
  montantTrancheFin: number;
}

export class FormaliteMedicaleModel {
  id: number;
  code: string;
  libelle: string;
  ordre: number;
}
