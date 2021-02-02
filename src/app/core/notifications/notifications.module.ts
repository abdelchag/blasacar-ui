import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/app/shared/shared.module';

import {
  ToastNotificationDisplaySelfClosingComponent
} from './toast-notifications-display-selfclosing/toast-notifications-display-selfclosing.component';
import { ToastNotificationDisplayComponent } from './toast-notifications-display/toast-notifications-display.component';
import { ToastNotificationComponent } from './toast-notifications/toast-notifications.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModule
  ],
  declarations: [
    ToastNotificationComponent,
    ToastNotificationDisplayComponent,
    ToastNotificationDisplaySelfClosingComponent,
  ],
  exports: [
    ToastNotificationComponent,
    ToastNotificationDisplayComponent,
    ToastNotificationDisplaySelfClosingComponent
  ]
})
export class NotificationsModule { }
