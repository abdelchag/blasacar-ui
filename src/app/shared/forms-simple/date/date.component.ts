import { Component, OnInit } from '@angular/core';

import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';
import { DateValidator } from './date.validator';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styles: []
})
export class DateComponent extends BaseSimpleComponent implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {
    if (this.validators) {
      this.validators.push(DateValidator.valid);
      this.addValidationMessages(configuration.validationMessages.date);
    }
    super.ngOnInit();
  }

  protected addValidationMessages(customsErrorMessages: any) {
    Object.keys(customsErrorMessages).forEach(
      key => (this.validationMessages[key] = customsErrorMessages[key])
    );
  }
}
