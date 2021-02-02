import { Pipe, PipeTransform } from '@angular/core';

import { ayantDroitQualite } from 'src/app/constants';

@Pipe({ name: 'qualite' })
export class QualitePipe implements PipeTransform {

  constructor() {
  }

  transform(value: string, ...args: any[]): string {
    if (!value) {
      return null;
    }
    if (value === ayantDroitQualite.CONJOINT) {
      return 'Conjoint';
    } else if (value === ayantDroitQualite.ENFANT) {
      return 'Enfant';
    } else {
      return 'Autre';
    }
  }
}
