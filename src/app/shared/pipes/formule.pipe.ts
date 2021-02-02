import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formule', pure: true })
export class FormulePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case '-1':
        return 'Aucune';
      case '0':
        return 'Socle';
      default:
        return `Socle + Option ${value}`;
    }
  }
}
