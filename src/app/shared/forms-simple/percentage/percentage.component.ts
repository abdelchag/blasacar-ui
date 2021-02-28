import { Component, Input, OnInit } from '@angular/core';
import { AbstractControlOptions, FormControl } from '@angular/forms';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleDirective } from '../base-simple.directive';

@Component({
  selector: 'blasacar-percentage',
  templateUrl: './percentage.component.html'
})
export class PercentageComponent extends BaseSimpleDirective implements OnInit {
  @Input() updateOn: AbstractControlOptions['updateOn'] = 'change';

  mask = (rawValue: { length: number; }): any => {
    if (rawValue.length === 3) {
      return [/[1]/, /[0]/, /[0]/];
    } else if (rawValue.length === 2) {
      return [/\d/, /\d/];
    } else {
      return [/\d/];
    }
  }

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    this.formControl = new FormControl('', { updateOn: this.updateOn });
    super.ngOnInit();
  }
}
