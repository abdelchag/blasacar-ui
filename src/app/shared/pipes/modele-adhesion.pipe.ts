import { Pipe, PipeTransform } from '@angular/core';

import { modeleAdhesion } from 'src/app/constants';

@Pipe({
  name: 'modeleAdhesion'
})
export class ModeleAdhesionPipe implements PipeTransform {

  transform(value: string): string | null {
    switch (value) {
      case modeleAdhesion.ISOLE_TNS:
        return 'Isolé';
      case modeleAdhesion.FAMILLE_MADELIN_PARTIEL_TNS:
      case modeleAdhesion.FAMILLE_MADELIN_TOTAL_TNS:
      case modeleAdhesion.FAMILLE_TNS:
        return 'Famille';
    }
  }
}
