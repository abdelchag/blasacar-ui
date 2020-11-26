import { NgModule } from '@angular/core';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';


const matDialogConfig: MatDialogConfig = {
  width: '500px',
  height: '300px',
  autoFocus: false
};

@NgModule({
  exports: [MatDialogModule]
})
export class MaterialModule { }
