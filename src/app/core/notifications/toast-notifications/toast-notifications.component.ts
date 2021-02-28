import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { notificationType } from 'src/app/constants';
import { ToastNotificationService } from 'src/app/core/services';
import { ToastNotificationModel } from 'src/app/shared/models';

@Component({
  selector: 'blasacar-toast-notifications',
  templateUrl: './toast-notifications.component.html',
  styles: []
})
export class ToastNotificationComponent implements OnInit, OnDestroy {

  notifications: ToastNotificationModel[] = [];
  subscription: Subscription;

  staticAlertClosed = false;

  constructor(private toastNotificationService: ToastNotificationService) { }

  ngOnInit(): void {
    this.toastNotificationService.notification$
      .subscribe(notification => {

        if (notification.type === notificationType.Clear) {
          this.notifications = [];
          return;
        }

        if (notification.code || notification.type === notificationType.Error) {
          notification.type = notificationType.Error;
          notification.isSelfClosing = false;
        } else {
          notification.isSelfClosing = true;
        }

        this.notifications.push(notification);
        this.notifications = Array.from(this.notifications);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  delete(error: ToastNotificationModel): void {
    this.notifications = this.notifications.filter(o => o !== error);
  }

}
