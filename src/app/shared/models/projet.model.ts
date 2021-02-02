import { ApporteurModel } from './apporteur.model';
import { StatutModel } from './statut.model';
import { TarificationModel } from './tarification.model';

export class ProjetModel {
  id: number;
  nom: string;
  numero: number;
  modification: Date;
  needFormalitesMedicales: boolean;
  statut: StatutModel;
  apporteur: ApporteurModel;
  tarifications: TarificationModel[];
  tarif: number;
  isVenteCouplee: boolean;
}
