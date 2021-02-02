import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'etatPaiment', pure: true })
export class EtatPaimentPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'PAID':
        return 'Réglé';
      default:
        return '';
    }
  }
}