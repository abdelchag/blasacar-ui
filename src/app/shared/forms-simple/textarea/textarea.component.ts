import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleDirective } from '../base-simple.directive';

@Component({
  selector: 'blasacar-textarea',
  templateUrl: './textarea.component.html',
  styles: []
})
export class TextareaComponent extends BaseSimpleDirective implements OnInit {

  @Input() autosizeMinRows = 2;
  @Input() autosizeMaxRows = 5;
  @Input() nbrMaxCaractere: number;

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
