import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { WidgetsModule } from 'src/app/shared/widgets';

import { SignatureDialogService } from './signature-dialog.service';
import { SignatureDialogComponent } from './signature-dialog/signature-dialog.component';

const components = [
  SignatureDialogComponent
];

@NgModule({
  declarations: components,
  entryComponents: components,
  imports: [
    CommonModule,
    WidgetsModule,
    NgbModalModule
  ],
  providers: [
    SignatureDialogService
  ]
})
export class SignatureDialogModule { }
