import { NgModule } from '@angular/core';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';


const matDialogConfig: MatDialogConfig = {
  width: "500px",
  height: "300px",
  autoFocus: false
}

@NgModule({
  exports: [MatDialogModule, MatDatepickerModule, MatNativeDateModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
    //{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: matDialogConfig }
  ]
})
export class MaterialModule { }
