import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  exports: [
    BsDatepickerModule,
    ModalModule,
    BsDropdownModule,
    TimepickerModule
  ],
})
export class NgxBootstrapModule { }
