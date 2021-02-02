import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyEuro'
})
export class CurrencyEuroPipe implements PipeTransform {

  constructor(
    @Inject(LOCALE_ID) private _locale: string
  ) { }

  transform(value: any): string | null {
    const currencyPipe = new CurrencyPipe(this._locale);
    return currencyPipe.transform(value, 'EUR', 'symbol', '1.2-2');
  }

}
