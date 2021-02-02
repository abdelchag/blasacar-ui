import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'iban' })
export class IbanPipe implements PipeTransform {
  transform(value: string): string {
    const regex = /(.{0,4})(.{0,4})(.{0,4})(.{0,4})(.{0,4})(.{0,4})(.{0,4})(.{0,4})(.{0,2})/;
    const found = value.match(regex);

    if (!found) {
      return value;
    }

    return found
      .slice(1)
      .filter(o => !!o)
      .join(' ');
  }
}

@Pipe({ name: 'ibanAcount' })
export class IbanAcountPipe implements PipeTransform {
  transform(value: string): string {
    const regex = /(.{4}).*(....)$/;
    return value ? value.replace(regex, '$1 •••• •••• $2') : value;
  }
}
