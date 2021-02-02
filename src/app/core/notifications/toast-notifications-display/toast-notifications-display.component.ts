import { Component, EventEmitter, Input, Output } from '@angular/core';

import { globalError } from 'src/app/global-error-constants';
import { ToastNotificationModel } from 'src/app/shared/models';

@Component({
  selector: 'app-toast-notifications-display',
  templateUrl: './toast-notifications-display.component.html',
  styles: []
})
export class ToastNotificationDisplayComponent {

  @Input() notification: ToastNotificationModel;
  @Output() notifyParent = new EventEmitter<boolean>(true);

  get message() {
    let message = globalError[this.notification.code];
    if (!message) {
      message = this.notification.message;
      if (!message) {
        message = this.notification;
      }
    }
    return message;
  }

  close(): void {
    this.notifyParent.emit(true);
  }
}
