import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from './base-simple.component';
import { Directive } from '@angular/core';

@Directive()
export class BaseWithoutDebounceComponent extends BaseSimpleComponent {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
    this.debounceTime = 0;
  }

}
