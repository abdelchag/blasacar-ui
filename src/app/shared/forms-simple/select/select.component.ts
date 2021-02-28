import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { ListItemModel } from '../../models';
import { BaseWithoutDebounceComponent } from '../base-without-debounce.component';

@Component({
  selector: 'blasacar-select',
  templateUrl: './select.component.html',
  styles: []
})

export class SelectComponent extends BaseWithoutDebounceComponent implements OnInit {

  @Input() options: any[] | ListItemModel[];

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
