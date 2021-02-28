import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxBootstrapModule } from '../ngx-bootstrap.module';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ErrorBlockComponent } from './components/error-block/error-block.component';
import { DirectivesModule } from './directives';
import { FormsComplexModule } from './forms-complex';
import { FormsSimpleModule } from './forms-simple';
import { ModalModule } from './modals';
import { PagesModule } from './pages';
import { PipesModule } from './pipes';
import { WidgetsModule } from './widgets';





const importExportModules = [
  CommonModule,
  DirectivesModule,
  FormsComplexModule,
  FormsModule,
  FormsSimpleModule,
  ModalModule,
  PagesModule,
  PipesModule,
  ReactiveFormsModule,
  WidgetsModule,
  TranslateModule,
  NgxBootstrapModule,
  RouterModule
];

const component = [
  ErrorBlockComponent,
  DatePickerComponent
];

@NgModule({
  imports: [
    ...importExportModules,
    TextMaskModule,
  ],
  exports: [
    ...importExportModules,
    ...component
  ],
  declarations: [
    ...component
  ],
})
export class SharedModule {
}
