import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defineLocale, frLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerDirective, BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';
import { BaseSimpleDirective } from '../base-simple.directive';

@Component({
  selector: 'blasacar-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent extends BaseSimpleDirective implements OnInit {

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
    this.validationMessages['bsDate'] = configuration.validationMessages.date.valid;
  }

  onDateSelected(date: Date): void {
    this.formGroup.setControl(this.controlName, this.formControl);
  }

}
