import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'securiteSociale', pure: true })
export class SecuriteSocialePipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{3})(\d{3})(\d{2})/, '$1 $2 $3 $4 $5 $6 $7') : value;
  }

}
