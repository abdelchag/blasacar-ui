import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Mask } from '../mask';

@Component({
  selector: 'blasacar-phone-mask',
  templateUrl: './phone-mask.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PhoneMaskComponent,
    multi: true
  }]
})
export class PhoneMaskComponent extends Mask {

  textMaskConfig = {
    mask: [/0/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/],
    guide: false
  };

  transformValueOnWrite(phone: any): any {
    return phone ? phone.replace('+33', '0') : phone;
  }

  transformValueOnChanges(phone: any): any {
    return phone ? phone.replace(/ /g, '').replace(/^0/, '+33') : phone;
  }

}
