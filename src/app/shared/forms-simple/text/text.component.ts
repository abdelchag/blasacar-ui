import { Component, Input } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styles: []
})
export class TextComponent extends BaseSimpleComponent {
  @Input() nbrMaxCaractere: number;
  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

}
