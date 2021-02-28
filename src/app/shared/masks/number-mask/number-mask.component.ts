import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { Mask } from '../mask';

const numberMask = createNumberMask({
  prefix: '',
  thousandsSeparatorSymbol: ' '
});

@Component({
  selector: 'app-number-mask',
  templateUrl: './number-mask.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberMaskComponent,
    multi: true
  }]
})
export class NumberMaskComponent extends Mask {

  @Input()
  maxValue: number;

  textMaskConfig = { mask: numberMask, keepCharPositions: true, guide: false };

  transformValueOnWrite(number: number | string) {
    return number ? number.toString().split(' ').join('') : number;
  }

  transformValueOnChanges(number: number | string) {
    return number ? number.toString().split(' ').join('') : number;
  }
}
