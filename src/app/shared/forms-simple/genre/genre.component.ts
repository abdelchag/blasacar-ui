import { Component, OnInit } from '@angular/core';

import { genres } from 'src/app/constants';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseWithoutDebounceDirective } from '../base-without-debounce.directive';

@Component({
  selector: 'blasacar-genre',
  templateUrl: './genre.component.html',
  styles: []
})
export class GenreComponent extends BaseWithoutDebounceDirective implements OnInit {

  genres = genres;

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
