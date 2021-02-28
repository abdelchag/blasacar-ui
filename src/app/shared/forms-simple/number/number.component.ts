import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { configuration } from 'src/app/configuration';

import { ValidationMessageService } from 'src/app/core/services';
import { BlasaUtils } from 'src/utils/blasa-utils';

import { BaseSimpleDirective } from '../base-simple.directive';

@Component({
  selector: 'blasacar-number',
  templateUrl: './number.component.html'
})
export class NumberComponent extends BaseSimpleDirective implements OnInit {

  @Input()
  maxValue: number;

  @Input()
  minValue: number;

  constructor(private validationMessageService: ValidationMessageService) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    this.addMaxValueValidator();
    this.addMinValueValidator();
    super.ngOnInit();
  }

  addMaxValueValidator(): void {
    if (!BlasaUtils.isNullOrUndefined(this.maxValue)) {
      this.validators.push(Validators.max(this.maxValue));
      this.validationMessages['max'] = configuration.genericMessageForMaxValue.concat(this.maxValue.toString());
    }
  }

  addMinValueValidator(): void {
    if (!BlasaUtils.isNullOrUndefined(this.minValue)) {
      this.validators.push(Validators.min(this.minValue));
      this.validationMessages['min'] = configuration.genericMessageForMinValue.concat(this.minValue.toString());
    }
  }

}
