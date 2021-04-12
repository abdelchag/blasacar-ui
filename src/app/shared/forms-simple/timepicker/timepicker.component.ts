import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ValidationMessageService } from 'src/app/core/services';
import { BaseSimpleDirective } from '../base-simple.directive';
import * as moment from 'moment';

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

  ngOnInit(): void {
    super.ngOnInit();
    this.subscriptions[2] = this.formControl.valueChanges
      .subscribe(value => {
        this.error = this.getError();
        value = moment(value).format('YYYY-MM-DDTHH:mm:ss');
        this.valueChanged.emit(value);
      });
  }
}
