import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'blasacar-email',
  templateUrl: './email.component.html',
  styles: []
})
export class EmailComponent extends BaseSimpleComponent implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    this.validationMessages = configuration.validationMessages.email;
    this.validators.push(Validators.email);

    super.ngOnInit();
  }
}
