import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Mask } from '../mask';

@Component({
  selector: 'app-iban-mask',
  templateUrl: './iban-mask.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: IbanMaskComponent,
    multi: true
  }]
})
export class IbanMaskComponent extends Mask {

  textMaskConfig = {
    mask: [
      /[A-Za-z]/, /[A-Za-z]/, /\d/, /\d/, ' ',
      /\w/, /\w/, /\w/, /\w/, ' ',
      /\w/, /\w/, /\w/, /\w/, ' ',
      /\w/, /\w/, /\w/, /\w/, ' ',
      /\w/, /\w/, /\w/, /\w/, ' ',
      /\w/, /\w/, /\w/, /\w/, ' ',
      /\w/, /\w/, /\w/, /\w/, ' ',
      /\w/, /\w/, /\w/, /\w/, ' ',
      /\w/, /\w/, /\w/, /\w/,
    ],
    pipe: (conformedValue: string) => conformedValue.toUpperCase(),
    guide: false
  };

  transformValueOnWrite(value: any) {
    return value;
  }

  transformValueOnChanges(value: any) {
    return value ? value.replace(/ /g, '') : value;
  }

}
