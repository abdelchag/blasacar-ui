import { Pipe, PipeTransform } from '@angular/core';

import { genre } from 'src/app/constants';

@Pipe({ name: 'genre', pure: true })
export class GenrePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case genre.FEMININ:
        return 'Féminin';
      case genre.MASCULIN:
        return 'Masculin';
      default:
        return value;
    }
  }

}
