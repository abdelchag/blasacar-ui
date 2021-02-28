import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleDirective } from '../base-simple.directive';

@Component({
  selector: 'blasacar-text',
  templateUrl: './text.component.html',
  styles: []
})
export class TextComponent extends BaseSimpleDirective {
  @Input() nbrMaxCaractere: number;

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

}
