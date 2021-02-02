import { Pipe, PipeTransform } from '@angular/core';

import { ContratModel } from '../models';
import { CollegePipe } from './college.pipe';

@Pipe({
  name: 'contratLabel'
})
export class ContratLabelPipe implements PipeTransform {

  collegePipe = new CollegePipe();

  transform(value: ContratModel): string | null {
    return `${value.description} ${this.collegePipe.transform(value.collegeCode)} N° ${value.numeroContrat}`;
  }
}
