import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { DateMaskComponent } from './date-mask/date-mask.component';
import { NumberMaskComponent } from './number-mask/number-mask.component';
import { PhoneMaskComponent } from './phone-mask/phone-mask.component';

const components = [
  DateMaskComponent,
  PhoneMaskComponent,
  NumberMaskComponent
];

@NgModule({
  declarations: [
    ...components

  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ]
})
export class MasksModule { }
