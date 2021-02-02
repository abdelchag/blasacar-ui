import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    const regex = /\+33(\d)(\d\d)(\d\d)(\d\d)(\d\d)/;
    return value ? value.replace(regex, '0$1 $2 $3 $4 $5') : value;
  }

}
