import { RegroupementTauxModel } from './regroupement-taux.model';

export class StructureCotisationModel {
  codeAssiette: string;
  dateFinTaux: string;
  libelleAssiette: string;
  numeroContrat: string;
  numeroFormule: string;
  primeId: number;
  dateDebutPeriode: Date;
  dateFinPeriode: Date;
  regroupementsTaux: RegroupementTauxModel[];
}
