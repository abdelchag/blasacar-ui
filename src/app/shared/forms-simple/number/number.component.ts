import { Component } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html'
})
export class NumberComponent extends BaseSimpleComponent {

  constructor(
    private validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

}
