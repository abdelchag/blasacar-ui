import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { httpErrorCode, NotificationType } from 'src/app/constants';
import { ToastNotificationModel } from 'src/app/shared/models';



@Injectable()
export class ToastNotificationService {

  private notification: Subject<ToastNotificationModel> = new Subject<ToastNotificationModel>();
  notification$: Observable<ToastNotificationModel> = this.notification.asObservable();

  notify(value: ToastNotificationModel): void {
    this.notification.next(value);
  }

  notifyHttpError(httpErrorResponse: HttpErrorResponse): void {
    const messageCodeSuffix = 'toast-notifications.error.';
    const errorMessages: string[] = [];
    if (httpErrorResponse.status === httpErrorCode.BadRequest) {
      errorMessages.push(`${messageCodeSuffix}bad-request`);
    } else if (typeof httpErrorResponse.error === 'string') {
      errorMessages.push(`${messageCodeSuffix}technical`);
    } else if (httpErrorResponse.error instanceof Array) {
      httpErrorResponse.error.forEach(err => errorMessages.push(err.message));
    } else {
      errorMessages.push(`${messageCodeSuffix}${httpErrorResponse.error.message}`);
    }
    errorMessages.forEach(errorMessage => this.notify({ message: errorMessage, type: NotificationType.Error }));
  }
  // }

  buildNotification(error: any, type: NotificationType): ToastNotificationModel {
    const notificationModel = new ToastNotificationModel();
    notificationModel.message = error;
    notificationModel.type = type;
    return notificationModel;
  }


  private parseError(str: string): ToastNotificationModel {
    try {
      return JSON.parse(str) as ToastNotificationModel;
    } catch (e) {
      return { message: str, type: NotificationType.Error };
    }
  }
}
