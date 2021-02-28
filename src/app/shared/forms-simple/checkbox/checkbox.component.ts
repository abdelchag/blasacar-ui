import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseWithoutDebounceComponent } from '../base-without-debounce.component';

@Component({
  selector: 'blasacar-checkbox',
  templateUrl: './checkbox.component.html',
  styles: []
})
export class CheckboxComponent extends BaseWithoutDebounceComponent implements OnInit {

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
