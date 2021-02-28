import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsSimpleModule } from '../forms-simple';
import { PipesModule } from '../pipes';
import { WidgetsModule } from '../widgets';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';
import { LayoutDialogComponent } from './layout-dialog/layout-dialog.component';
import { ModalComponent } from './modal.component';

const components = [
  BaseModalComponent,
  DialogComponent,
  InformationDialogComponent,
  LayoutDialogComponent,
  ModalComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    WidgetsModule,
    FormsSimpleModule
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class ModalModule { }
