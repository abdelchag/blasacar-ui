import { Component, OnInit } from '@angular/core';

import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';
import { phoneValidator } from '../validators';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html'
})
export class PhoneComponent extends BaseSimpleComponent implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {

    this.validators.push(phoneValidator());
    this.validationMessages.pattern = configuration.validationMessages.telephone.pattern;

    super.ngOnInit();

  }

}
