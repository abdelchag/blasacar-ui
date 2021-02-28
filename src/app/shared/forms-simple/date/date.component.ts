import { Component, OnInit } from '@angular/core';

import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleDirective } from '../base-simple.directive';
import { DateValidator } from './date.validator';

@Component({
  selector: 'blasacar-date',
  templateUrl: './date.component.html',
  styles: []
})
export class DateComponent extends BaseSimpleDirective implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    if (this.validators) {
      // tslint:disable-next-line
      this.validators.push(DateValidator.valid);
      this.addValidationMessages(configuration.validationMessages.date);
    }
    super.ngOnInit();
  }

  protected addValidationMessages(customsErrorMessages: any): void {
    Object.keys(customsErrorMessages).forEach(
      key => (this.validationMessages[key] = customsErrorMessages[key])
    );
  }
}
