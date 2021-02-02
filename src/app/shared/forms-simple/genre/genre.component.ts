import { Component, OnInit } from '@angular/core';

import { genres } from 'src/app/constants';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseWithoutDebounceComponent } from '../base-without-debounce.component';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styles: []
})
export class GenreComponent extends BaseWithoutDebounceComponent implements OnInit {

  genres = genres;

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
