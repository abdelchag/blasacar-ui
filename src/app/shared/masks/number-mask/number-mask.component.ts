import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { MaskDirective } from '../mask.directive';

const numberMask = createNumberMask({
  prefix: '',
  thousandsSeparatorSymbol: ' '
});

@Component({
  selector: 'blasacar-number-mask',
  templateUrl: './number-mask.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberMaskComponent,
    multi: true
  }]
})
export class NumberMaskComponent extends MaskDirective {

  @Input()
  maxValue: number;

  @Input()
  minValue: number;

  textMaskConfig = { mask: numberMask, keepCharPositions: true, guide: false };

  transformValueOnWrite(number: number | string): number | string {
    return number ? number.toString().split(' ').join('') : number;
  }

  transformValueOnChanges(number: number | string): number | string {
    return number ? number.toString().split(' ').join('') : number;
  }
}
