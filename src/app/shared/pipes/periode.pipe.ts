import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

import { periodicite } from 'src/app/constants';

@Pipe({
  name: 'periode'
})
export class PeriodePipe implements PipeTransform {

  transform(date: string, periodiciteContrat: string): string | null {

    moment.locale('fr');
    const periodeMoment = moment(date, 'DD/MM/YYYY', true);

    switch (periodiciteContrat) {
      case periodicite.TRIMESTRIEL:
        return 'Trimestre ' + periodeMoment.format('Q');
      case periodicite.MENSUEL:
        const month = periodeMoment.format('MMMM');
        return month[0].toUpperCase() + month.substr(1).toLowerCase();
      default:
        return null;
    }

  }

}
