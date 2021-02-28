import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleDirective } from './base-simple.directive';
import { Directive } from '@angular/core';

@Directive()
export class BaseWithoutDebounceDirective extends BaseSimpleDirective {

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
    this.debounceTime = 0;
  }

}
