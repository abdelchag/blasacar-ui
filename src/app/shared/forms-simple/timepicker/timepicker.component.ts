import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ValidationMessageService } from 'src/app/core/services';
import { BaseSimpleComponent } from '../base-simple.component';

@Component({
  selector: 'blasacar-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimepickerComponent extends BaseSimpleComponent implements OnInit, OnChanges {

  valueTP: Date;

  constructor(private readonly validationMessageService: ValidationMessageService) {
    super(validationMessageService);
  }

  ngOnInit(): void {
    console.log('timepicker init');
  }

  ngOnChanges(): void {
    console.log('timepicker changed');
  }

}
