import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseWithoutDebounceDirective } from '../base-without-debounce.directive';

@Component({
  selector: 'blasacar-checkbox-card',
  templateUrl: './checkbox-card.component.html'
})
export class CheckboxCardComponent extends BaseWithoutDebounceDirective implements OnInit {

  @Input() description: string;

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
