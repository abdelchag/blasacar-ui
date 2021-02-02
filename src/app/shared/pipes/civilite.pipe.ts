import { Pipe, PipeTransform } from '@angular/core';

import { genre } from 'src/app/constants';

@Pipe({ name: 'civilite' })
export class CivilitePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case genre.MASCULIN:
        return 'M.';
      case genre.FEMININ:
        return 'Mme';
      default:
        return '';
    }
  }

}
