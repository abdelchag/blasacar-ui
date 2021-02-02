import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsSimpleModule } from '../forms-simple';
import { PipesModule } from '../pipes';
import { WidgetsModule } from '../widgets';
import { AdresseUpdateInfoDialogComponent } from './adresse-update-info-dialog/adresse-update-info-dialog.component';
import {
  ApporteurAccessWarningDialogComponent
} from './apporteur-access-warning-dialog/apporteur-access-warning-dialog.component';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { ContactApporteurDialogComponent } from './contact-apporteur-dialog/contact-apporteur-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { DoublonAyantDroitDialogComponent } from './doublon-ayant-droit-dialog/doublon-ayant-droit-dialog.component';
import {
  AgeAndCumulRetraiteSalarieErrorComponent
} from './error/ageAndCumulRetraite-salarie-error/ageAndCumulRetraite-salarie-error.component';
import { AncienneteSalarieErrorComponent } from './error/anciennete-salarie-error/anciennete-salarie-error.component';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';
import { LayoutDialogComponent } from './layout-dialog/layout-dialog.component';
import { MailSignatureSalarieComponent } from './mail-signature-salarie/mail-signature-salarie.component';
import { ModalComponent } from './modal.component';
import { RadiationDialogComponent } from './radiation-dialog/radiation-dialog.component';

const components = [
  AdresseUpdateInfoDialogComponent,
  AgeAndCumulRetraiteSalarieErrorComponent,
  AncienneteSalarieErrorComponent,
  ApporteurAccessWarningDialogComponent,
  BaseModalComponent,
  DoublonAyantDroitDialogComponent,
  DialogComponent,
  InformationDialogComponent,
  LayoutDialogComponent,
  MailSignatureSalarieComponent,
  ModalComponent,
  ContactApporteurDialogComponent,
  RadiationDialogComponent
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
