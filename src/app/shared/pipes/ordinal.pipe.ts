import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ordinal' })
export class OrdinalPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1:
        return `${value}er`;
      default:
        return `${value}ème`;
    }
  }
}
