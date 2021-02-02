import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseWithoutDebounceComponent } from '../base-without-debounce.component';

@Component({
  selector: 'app-checkbox-card',
  templateUrl: './checkbox-card.component.html'
})
export class CheckboxCardComponent extends BaseWithoutDebounceComponent implements OnInit {

  @Input() description: string;

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
