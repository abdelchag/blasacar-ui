import { ReferentialModel } from './referential.model';

export class StatutModel implements ReferentialModel {
  id: number;
  code: string;
  libelle: string;
  libelleLong: string;
  libelleCourt: string;
  ordre: number;
}
