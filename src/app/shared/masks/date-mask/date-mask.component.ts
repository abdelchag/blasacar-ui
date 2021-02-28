import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Mask } from '../mask';

@Component({
  selector: 'blasacar-date-mask',
  templateUrl: './date-mask.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DateMaskComponent,
    multi: true
  }]
})
export class DateMaskComponent extends Mask {

  textMaskConfig = {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    guide: false
  };

  transformValueOnWrite(value: any): void {
    return value;
  }

  transformValueOnChanges(value: any): void {
    return value;
  }

}
