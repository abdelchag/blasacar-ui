import { Component, OnInit } from '@angular/core';

import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';
import { DateValidator } from '../validators/date.validator';
import { DateNaissanceValidator } from './date-naissance.validator';

@Component({
  selector: 'app-date-naissance',
  templateUrl: './date-naissance.component.html',
  styles: []
})
export class DateNaissanceComponent extends BaseSimpleComponent implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {

    if (this.validators) {
      this.validators.push(DateValidator.future);
      this.validators.push(DateNaissanceValidator.valid());
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
