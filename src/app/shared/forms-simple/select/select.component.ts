import { Component, Input, OnInit } from '@angular/core';

import { ValidationMessageService } from 'src/app/core/services';

import { ListItemModel } from '../../models';
import { BaseWithoutDebounceDirective } from '../base-without-debounce.directive';

@Component({
  selector: 'blasacar-select',
  templateUrl: './select.component.html',
  styles: []
})

export class SelectComponent extends BaseWithoutDebounceDirective implements OnInit {

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
