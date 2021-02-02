import { Pipe, PipeTransform } from '@angular/core';

import { OrganismeRattachementModel } from '../models';

@Pipe({
  name: 'organismeRattachement',
  pure: true
})
export class OrganismeRattachementPipe implements PipeTransform {

  transform(value: OrganismeRattachementModel): any {
    return value ? `${value.codeRegime} ${value.codeCaisse} ${value.codeCentre}` : '';
  }

}
