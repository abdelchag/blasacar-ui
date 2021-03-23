import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { StringUtils } from 'src/utils/string-utils';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { MaskDirective } from '../mask.directive';

@Component({
  selector: 'blasacar-number-mask',
  templateUrl: './number-mask.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberMaskComponent,
    multi: true
  }]
})
export class NumberMaskComponent extends MaskDirective implements OnInit {

  @Input()
  decimal: boolean;

  @Input()
  suffix: string;

  @Input()
  maxValue: number;

  @Input()
  minValue: number;

  textMaskConfig: any;

  ngOnInit(): void {
    const numberMaskCreated = this.decimal ? {
      prefix: '',
      suffix: ' ' + this.suffix,
      thousandsSeparatorSymbol: ' ',
      allowDecimal: true,
      decimalSymbol: '.',
      decimalLimit: 2
    } : {
      prefix: '',
      suffix: ' ' + this.suffix,
      thousandsSeparatorSymbol: ' '
    };
    const numberMask = createNumberMask(numberMaskCreated);
    this.textMaskConfig = { mask: numberMask, keepCharPositions: true, guide: false };
  }

  transformValueOnWrite(number: number): string {
    const numberString = String(number);
    return numberString ? numberString.toString().split(' ').join('') : numberString;
  }

  transformValueOnChanges(number: string): number {
    let formatted = number ? number.replace(this.suffix, '') : number;
    formatted = formatted ? formatted.toString().split(' ').join('') : formatted;
    return StringUtils.isEmpty(formatted) ? null : +formatted;
  }
}
