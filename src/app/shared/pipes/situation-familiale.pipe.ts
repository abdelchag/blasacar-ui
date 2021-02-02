import { Pipe, PipeTransform } from '@angular/core';

import { situationFamiliale } from 'src/app/constants';

@Pipe({ name: 'situationFamiliale', pure: true })
export class SituationFamilialePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case situationFamiliale.CELIBATAIRE:
        return 'Célibataire';
      case situationFamiliale.DIVORCE:
        return 'Divorcé(e)';
      case situationFamiliale.MARIE:
        return 'Marié(e)';
      case situationFamiliale.PACSE:
        return 'Pacsé(e)';
      case situationFamiliale.VEUF:
        return 'Veuf(ve)';
      case situationFamiliale.VIE_MARITALE:
        return 'Vie maritale';
      default:
        return value;
    }
  }

}
