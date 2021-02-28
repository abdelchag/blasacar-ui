import { Component, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { BaseWithoutDebounceDirective } from '../base-without-debounce.directive';

@Component({
  selector: 'blasacar-toggle-button',
  templateUrl: './toggle-button.component.html',
  styles: []
})
export class ToggleButtonComponent extends BaseWithoutDebounceDirective implements OnInit {

  set disabled(disabled: boolean) {
    if (disabled) {
      this.formControl.disable({ onlySelf: true, emitEvent: false });
    } else {
      this.formControl.enable({ onlySelf: true, emitEvent: false });
    }
  }

  get disabled(): boolean {
    return this.formControl.disabled;
  }

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    super.ngOnInit();

    if (!this.initialValue) {
      this.formControl.setValue(false, { onlySelf: true, emitEvent: false });
    }
  }

}
