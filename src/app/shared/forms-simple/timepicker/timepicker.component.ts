import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ValidationMessageService } from 'src/app/core/services';
import { BaseSimpleDirective } from '../base-simple.directive';

@Component({
  selector: 'blasacar-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimepickerComponent extends BaseSimpleDirective implements OnInit {

  constructor(private readonly validationMessageService: ValidationMessageService) {
    super(validationMessageService);
  }
}
