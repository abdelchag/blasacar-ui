import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxBootstrapModule } from 'src/app/ngx-bootstrap.module';


import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { MasksModule } from '../masks/masks.module';
import { PipesModule } from '../pipes';
import { WidgetsModule } from '../widgets';
import { CheckboxCardComponent } from './checkbox-card/checkbox-card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CiviliteComponent } from './civilite/civilite.component';
import { DateNaissanceComponent } from './date-naissance/date-naissance.component';
import { DateComponent } from './date/date.component';
import { DatepickerFormComponent } from './datepicker-form/datepicker-form.component';
import { EmailComponent } from './email/email.component';
import { GenreComponent } from './genre/genre.component';
import { MobilePhoneComponent } from './mobile-phone/mobile-phone.component';
import { NumberComponent } from './number/number.component';
import { PercentageComponent } from './percentage/percentage.component';
import { PhoneComponent } from './phone/phone.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { TextNounNumberComponent } from './text-noun-number/text-noun-number.component';
import { TextNounComponent } from './text-noun/text-noun.component';
import { TextPasswordComponent } from './text-password/text-password.component';
import { TextComponent } from './text/text.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';


const components = [
  CheckboxCardComponent,
  CheckboxComponent,
  DateComponent,
  DateNaissanceComponent,
  EmailComponent,
  GenreComponent,
  MobilePhoneComponent,
  NumberComponent,
  PercentageComponent,
  PhoneComponent,
  RadioComponent,
  SelectComponent,
  TextareaComponent,
  TextComponent,
  TextDisplayComponent,
  TextNounComponent,
  TextPasswordComponent,
  TextNounNumberComponent,
  TextDisplayComponent,
  ToggleButtonComponent,
  CiviliteComponent,
  DatepickerFormComponent,
  TimepickerComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    PipesModule,
    NgbModule,
    MasksModule,
    TextFieldModule,
    WidgetsModule,
    NgxBootstrapModule
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class FormsSimpleModule { }
