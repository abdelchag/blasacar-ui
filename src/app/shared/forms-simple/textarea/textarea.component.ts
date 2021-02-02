import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styles: []
})
export class TextareaComponent extends BaseSimpleComponent implements OnInit {

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
