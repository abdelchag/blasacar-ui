import { Component, OnInit } from '@angular/core';

import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';
import { IbanValidator } from './iban.validator';

@Component({
  selector: 'app-iban',
  templateUrl: './iban.component.html',
  styles: []
})
export class IbanComponent extends BaseSimpleComponent implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {

    this.debounceTime = 2500;
    this.validators.push(IbanValidator.validate);
    this.validationMessages = configuration.validationMessages.iban;

    super.ngOnInit();

  }
}
