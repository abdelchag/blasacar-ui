import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { MessageSplashScreenDialogComponent } from './message-splash-screen-dialog/message-splash-screen-dialog.component';
import { NavigationErreurDialogComponent } from './navigation-erreur-dialog/navigation-erreur-dialog.component';

const components = [
  MessageSplashScreenDialogComponent,
  NavigationErreurDialogComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ...components
  ],
  entryComponents: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class DialogsModule { }
