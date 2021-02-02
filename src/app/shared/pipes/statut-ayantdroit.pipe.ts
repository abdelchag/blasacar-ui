import { Pipe, PipeTransform } from '@angular/core';

import { ayantDroitStatut } from 'src/app/constants';

@Pipe({ name: 'statutAyantDroit' })
export class StatutAyantDroitPipe implements PipeTransform {

  constructor() {
  }

  transform(value: string, ...args: any[]): string {
    if (!value) {
      return null;
    }
    if (value === ayantDroitStatut.Doublon) {
      return 'En cours';
    } else {
      return null;
    }
  }
}
