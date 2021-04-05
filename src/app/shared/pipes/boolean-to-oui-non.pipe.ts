import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booleanToOuiNon' })
export class BooleanToOuiNonPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'travel-propose.automatique-acceptance.yes' : 'travel-propose.automatique-acceptance.no';
  }
}