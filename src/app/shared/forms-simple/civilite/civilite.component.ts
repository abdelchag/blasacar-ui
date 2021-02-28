import { Component, OnInit } from '@angular/core';

import { civilites } from 'src/app/constants';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseWithoutDebounceDirective } from '../base-without-debounce.directive';

@Component({
  selector: 'blasacar-civilite',
  templateUrl: './civilite.component.html',
  styles: []
})
export class CiviliteComponent extends BaseWithoutDebounceDirective implements OnInit {

  civilites = civilites;

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
