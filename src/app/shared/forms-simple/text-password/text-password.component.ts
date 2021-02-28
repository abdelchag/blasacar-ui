import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { configuration } from 'src/app/configuration';
import { nounPattern, passwordPattern } from 'src/app/constants';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleDirective } from '../base-simple.directive';

@Component({
  selector: 'blasacar-password',
  templateUrl: './text-password.component.html',
  styles: []
})
export class TextPasswordComponent extends BaseSimpleDirective implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    this.validators.push(Validators.pattern(passwordPattern));
    this.validationMessages = configuration.validationMessages.password;
    // this.toUpperNormalize = true;
    super.ngOnInit();
  }

}
