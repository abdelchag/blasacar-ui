import { Pipe, PipeTransform } from '@angular/core';

import { periodicite } from 'src/app/constants';

@Pipe({
  name: 'periodicite'
})
export class PeriodicitePipe implements PipeTransform {

  transform(value: string): string | null {

    switch (value) {
      case periodicite.ANNUEL:
        return 'Annuel';
      case periodicite.SEMESTRIEL:
        return 'Semestriel';
      case periodicite.TRIMESTRIEL:
        return 'Trimestriel';
      case periodicite.MENSUEL:
        return 'Mensuel';
      default:
        return null;
    }

  }

}
