import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defineLocale, frLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ValidationMessageService } from 'src/app/core/services';
import { BaseSimpleComponent } from '../base-simple.component';

@Component({
  selector: 'blasacar-datepicker-form',
  templateUrl: './datepicker-form.component.html',
  styleUrls: ['./datepicker-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerFormComponent extends BaseSimpleComponent implements OnInit {

  @Input()
  placeholder = '';

  @Input()
  showAfterDates = true;

  @Input()
  showBeforeDates = true;

  bsConfig: Partial<BsDatepickerConfig> = {
    isAnimated: true,
    containerClass: 'theme-dark-blue',
    dateInputFormat: 'DD/MM/YYYY'
  };

  constructor(
    private readonly validationMessageService: ValidationMessageService,
    private readonly translate: TranslateService,
    private readonly localeService: BsLocaleService) {
    super(validationMessageService);
    defineLocale('fr', frLocale);
  }

  ngOnInit(): void {
    this.localeService.use(this.translate.currentLang);
    this.bsConfig.maxDate = this.showAfterDates ? null : new Date();
    this.bsConfig.minDate = this.showBeforeDates ? null : new Date();
    super.ngOnInit();
  }

  onDateSelected(date: Date): void {
    this.formGroup.setControl(this.controlName, this.formControl);
  }

}
