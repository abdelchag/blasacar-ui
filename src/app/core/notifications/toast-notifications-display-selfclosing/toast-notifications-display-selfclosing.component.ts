import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ToastNotificationModel } from 'src/app/shared/models';

@Component({
  selector: 'blasacar-toast-notifications-display-selfclosing',
  templateUrl: './toast-notifications-display-selfclosing.component.html',
  styles: []
})
export class ToastNotificationDisplaySelfClosingComponent implements OnInit {

  @Input() notification: ToastNotificationModel;
  @Output() notifyParent = new EventEmitter<boolean>();

  staticAlertClosed = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.staticAlertClosed = true;
      this.notifyParent.emit(true);
    }, 20000);
  }

  close(): void {
    this.staticAlertClosed = true;
    this.notifyParent.emit(true);
  }

}
