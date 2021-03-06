import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { configuration } from 'src/app/configuration';
import { nounAndNumberPattern } from 'src/app/constants';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleDirective } from '../base-simple.directive';

@Component({
  selector: 'blasacar-text-noun-number',
  templateUrl: './text-noun-number.component.html',
  styles: []
})
export class TextNounNumberComponent extends BaseSimpleDirective implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    this.validators.push(Validators.pattern(nounAndNumberPattern));
    this.validationMessages = configuration.validationMessages.nounAndNumber;
    this.toUpperNormalize = true;
    super.ngOnInit();
  }

}
