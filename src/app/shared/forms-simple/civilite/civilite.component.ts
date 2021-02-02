import { Component, OnInit } from '@angular/core';

import { civilites } from 'src/app/constants';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseWithoutDebounceComponent } from '../base-without-debounce.component';

@Component({
  selector: 'app-civilite',
  templateUrl: './civilite.component.html',
  styles: []
})
export class CiviliteComponent extends BaseWithoutDebounceComponent implements OnInit {

  civilites = civilites;

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
