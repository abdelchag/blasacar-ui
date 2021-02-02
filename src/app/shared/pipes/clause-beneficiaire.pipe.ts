import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'clauseBeneficiaire' })
export class ClauseBeneficiairePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case '0':
        return 'Standard';
      case '1':
        return 'Particulière';
      default:
        return '';
    }
  }

}