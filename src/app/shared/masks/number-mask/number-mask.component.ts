import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BlasaUtils } from 'src/utils/blasa-utils';
import { StringUtils } from 'src/utils/string-utils';

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

  transformValueOnWrite(number: number): string {
    const numberString = String(number);
    return numberString ? numberString.toString().split(' ').join('') : numberString;
  }

  transformValueOnChanges(number: string): number {
    const formatted = number ? number.toString().split(' ').join('') : number;
    return StringUtils.isEmpty(formatted) ? null : +formatted;
  }
}
