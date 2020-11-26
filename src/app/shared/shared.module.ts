import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxBootstrapModule } from '../ngx-bootstrap.module';
import { ErrorBlockComponent } from './components/error-block/error-block.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

@NgModule({
    declarations: [
        ErrorBlockComponent,
        DatePickerComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        NgxBootstrapModule,
        ErrorBlockComponent,
        DatePickerComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        NgxBootstrapModule
    ]
})
export class SharedModule {}
