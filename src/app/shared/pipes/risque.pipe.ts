import { Pipe, PipeTransform } from '@angular/core';

import { risque } from 'src/app/constants';

@Pipe({
  name: 'risque',
  pure: true
})
export class RisquePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case risque.PREVOYANCE:
        return 'Prévoyance';
      case risque.SANTE:
        return 'Santé';
      default:
        return value;
    }
  }

}
