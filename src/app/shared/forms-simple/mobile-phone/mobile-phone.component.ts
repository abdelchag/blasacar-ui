import { Component, OnInit } from '@angular/core';

import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleDirective } from '../base-simple.directive';
import { mobilePhoneValidator } from '../validators';

@Component({
  selector: 'blasacar-mobile-phone',
  templateUrl: './mobile-phone.component.html'
})
export class MobilePhoneComponent extends BaseSimpleDirective implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {

    this.validators.push(mobilePhoneValidator());
    this.validationMessages.pattern = configuration.validationMessages.telephoneMobile.pattern;

    super.ngOnInit();

  }

}
