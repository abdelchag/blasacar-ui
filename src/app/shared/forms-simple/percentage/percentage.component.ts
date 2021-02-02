import { Component, Input, OnInit } from '@angular/core';
import { AbstractControlOptions, FormControl } from '@angular/forms';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html'
})
export class PercentageComponent extends BaseSimpleComponent implements OnInit {
  @Input() updateOn: AbstractControlOptions['updateOn'] = 'change';

  mask = function (rawValue: { length: number; }) {
    if (rawValue.length === 3) {
      return [/[1]/, /[0]/, /[0]/];
    } else if (rawValue.length === 2) {
      return [/\d/, /\d/];
    } else {
      return [/\d/];
    }
  };

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {
    this.formControl = new FormControl('', { updateOn: this.updateOn });
    super.ngOnInit();
  }
}
