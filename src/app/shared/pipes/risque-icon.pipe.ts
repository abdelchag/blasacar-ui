import { Pipe, PipeTransform } from '@angular/core';

import { risque } from 'src/app/constants';

@Pipe({
  name: 'risqueIcon'
})
export class RisqueIconPipe implements PipeTransform {

  transform(value: string): string | null {
    switch (value) {
      case risque.PREVOYANCE:
        return 'prevoyance';
      case risque.SANTE:
        return 'sante';
      default:
        return '';
    }
  }

}
