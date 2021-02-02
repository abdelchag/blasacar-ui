import { Pipe, PipeTransform } from '@angular/core';

import { modePaiement } from 'src/app/constants';

@Pipe({
  name: 'modePaiement'
})
export class ModePaiementPipe implements PipeTransform {

  transform(value: string): string | null {
    switch (value) {
      case modePaiement.CHEQUE:
        return 'Chèque';
      case modePaiement.LETTRE_CHEQUE:
        return 'Lettre-chèque';
      case modePaiement.PRELEVEMENT:
        return 'Prélèvement';
      case modePaiement.PRELEVEMENT_AUTOMATIQUE:
          return 'Prélèvement automatique';
      case modePaiement.VIREMENT_AUTOMATIQUE:
        return 'Virement automatique';
      case modePaiement.VIREMENT_PONCTUEL:
        return 'Virement ponctuel';
      default:
        return value;
    }
  }
}
