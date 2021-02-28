import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';
import { ListItemModel } from 'src/app/shared/models';

import { BaseWithoutDebounceDirective } from '../base-without-debounce.directive';

@Component({
  selector: 'blasacar-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent extends BaseWithoutDebounceDirective implements OnInit {

  @Input() options: any[] | ListItemModel[];
  @Input() vertical: boolean;

  @Input() initialValue: string;

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
