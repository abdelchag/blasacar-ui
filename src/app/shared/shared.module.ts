import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';


import { DirectivesModule } from './directives';
import { FormsComplexModule } from './forms-complex';
import { FormsSimpleModule } from './forms-simple';
import { ModalModule } from './modals';
import { PagesModule } from './pages';
import { PipesModule } from './pipes';
import { WidgetsModule } from './widgets';

import { TranslateModule } from '@ngx-translate/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxBootstrapModule } from '../ngx-bootstrap.module';
import { ErrorBlockComponent } from './components/error-block/error-block.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    FormsComplexModule,
    FormsModule,
    FormsSimpleModule,
    ModalModule,
    PagesModule,
    PipesModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule,
    TextMaskModule,
    WidgetsModule,
    TranslateModule,
    NgxBootstrapModule
  ],
  exports: [
    DirectivesModule,
    FormsComplexModule,
    FormsModule,
    FormsSimpleModule,
    ModalModule,
    PagesModule,
    PipesModule,
    ReactiveFormsModule,
    WidgetsModule,
    CommonModule,
    TranslateModule,
    NgxBootstrapModule,
    ErrorBlockComponent,
    DatePickerComponent
  ],
  declarations: [
    ErrorBlockComponent,
    DatePickerComponent
],
})
export class SharedModule {
}
