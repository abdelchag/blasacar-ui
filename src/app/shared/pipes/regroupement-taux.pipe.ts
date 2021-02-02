import { Pipe, PipeTransform } from '@angular/core';

import { Helpers } from 'src/app/helpers';

@Pipe({
  name: 'regroupementTaux'
})
export class RegroupementTauxPipe implements PipeTransform {

  transform(value: string): string {
    const item = Helpers.getRegroupementTauxItem(value);
    return item && item.libelle;
  }
}
