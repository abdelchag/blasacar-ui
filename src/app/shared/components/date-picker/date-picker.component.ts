import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { frLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'blasacar-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent implements OnInit {

  @Input()
  isBirthDate: boolean;

  @Input()
  placeholder: string = '';

  @Output()
  dateSelected = new EventEmitter<Date>();

  bsConfig: Partial<BsDatepickerConfig> = {
    isAnimated: true,
    containerClass: 'theme-dark-blue',
    dateInputFormat: 'DD/MM/YYYY'
  };

  constructor(private translate: TranslateService, private localeService: BsLocaleService) {
    defineLocale('fr', frLocale);
  }

  ngOnInit(): void {
    this.localeService.use(this.translate.currentLang);
    this.bsConfig.maxDate = this.isBirthDate ? new Date() : null;
  }

  onDateSelected(date: Date): void {
    this.dateSelected.emit(date);
  }

}
