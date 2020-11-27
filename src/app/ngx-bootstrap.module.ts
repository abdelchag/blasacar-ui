import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    BsDatepickerModule,
    ModalModule,
    BsDropdownModule
  ],
})
export class NgxBootstrapModule { }
