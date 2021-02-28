import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { configuration } from 'src/app/configuration';
import { nounPattern } from 'src/app/constants';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleDirective } from '../base-simple.directive';

@Component({
  selector: 'blasacar-text-noun',
  templateUrl: './text-noun.component.html',
  styles: []
})
export class TextNounComponent extends BaseSimpleDirective implements OnInit {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    this.validators.push(Validators.pattern(nounPattern));
    this.validationMessages = configuration.validationMessages.noun;
    this.toUpperNormalize = true;
    super.ngOnInit();
  }

}
