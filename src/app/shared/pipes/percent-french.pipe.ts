import { DecimalPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentFrench'
})
export class PercentFrenchPipe implements PipeTransform {

  constructor(
    @Inject(LOCALE_ID) private _locale: string
  ) { }

  transform(value: any): string | null {
    const decimalPipe = new DecimalPipe(this._locale);
    return decimalPipe.transform(value, '1.2-2') + ' %';
  }

}
