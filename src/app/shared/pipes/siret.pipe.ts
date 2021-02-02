import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'siret' })
export class SiretPipe implements PipeTransform {

  transform(value: string): string {
    const regex = /(\d{3})(\d{3})(\d{3})(\d{5})/;
    return value ? value.replace(regex, '$1 $2 $3 $4') : value;
  }

}
