import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseWithoutDebounceDirective } from '../base-without-debounce.directive';

@Component({
  selector: 'blasacar-checkbox',
  templateUrl: './checkbox.component.html',
  styles: []
})
export class CheckboxComponent extends BaseWithoutDebounceDirective implements OnInit {

  @Input() icon = '';

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
