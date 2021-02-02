import { RisqueModel } from './risque.model';

export class TarificationModel {
  contratIdList: number[];
  id: number;
  libelleProduit: string;
  dateEffet: Date;
  risque: RisqueModel;
  collegeCode: string;
  tarif: number;
  hasAllContratRemplace: boolean;
}
