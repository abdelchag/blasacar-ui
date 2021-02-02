import { Pipe, PipeTransform } from '@angular/core';

import { affilieTypes } from 'src/app/constants';

@Pipe({ name: 'affilieType' })
export class AffilieTypePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const affilieType = affilieTypes.find(x => x.code === value);

    return Boolean(affilieType) ? affilieType.libelle : '';
  }
}
