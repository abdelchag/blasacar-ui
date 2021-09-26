import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  constructor(
    @Inject(LOCALE_ID) private _locale: string
  ) { }

  transform(value: any): string | null {
    const datePipe = new DatePipe(this._locale);
    return datePipe.transform(value, 'dd/MM/yyyy') + ' ' + datePipe.transform(value, 'HH:mm');
  }

}
