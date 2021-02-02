import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { configuration } from 'src/app/configuration';
import { nounPattern } from 'src/app/constants';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';

@Component({
  selector: 'app-password',
  templateUrl: './text-password.component.html',
  styles: []
})
export class TextPasswordComponent extends BaseSimpleComponent implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {
    this.validators.push(Validators.pattern(nounPattern));
    this.validationMessages = configuration.validationMessages.noun;
    this.toUpperNormalize = true;
    super.ngOnInit();
  }

}
