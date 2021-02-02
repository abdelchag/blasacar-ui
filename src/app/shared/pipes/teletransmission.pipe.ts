import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'teletransmission' })
export class TeletransmissionPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Oui' : 'Non';
  }
}
