import { Pipe, PipeTransform } from '@angular/core';

import { college } from 'src/app/constants';

@Pipe({ name: 'college', pure: true })
export class CollegePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case college.CADRE:
        return 'Cadre';
      case college.ENSEMBLE_DU_PERSONNEL:
        return 'Ensemble du personnel';
      case college.NON_CADRE:
        return 'Non cadre';
      case college.TNS:
        return 'TNS';
      default:
        return '';
    }
  }

}
