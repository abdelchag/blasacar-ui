import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booleanToOuiNon' })
export class BooleanToOuiNonPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Oui' : 'Non';
  }
}
