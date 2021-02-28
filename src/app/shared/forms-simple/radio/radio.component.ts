import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';
import { ListItemModel } from 'src/app/shared/models';

import { BaseWithoutDebounceComponent } from '../base-without-debounce.component';

@Component({
  selector: 'blasacar-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent extends BaseWithoutDebounceComponent implements OnInit {

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
