import { Pipe, PipeTransform } from '@angular/core';

import { rattachementsEntreprise, rattachementsPersonne } from 'src/app/constants';

@Pipe({
  name: 'rattachement',
  pure: true
})
export class RattachementPipe implements PipeTransform {

  transform(rattachementCode: string, isentreprise: boolean): any {

    if (isentreprise) {
      return rattachementsEntreprise[rattachementCode];
    } else {
      return rattachementsPersonne[rattachementCode];
    }
  }

}
