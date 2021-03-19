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
    let errorMessage: string;
    if (httpErrorResponse.status === httpErrorCode.BadRequest) {
      errorMessage = `${messageCodeSuffix}bad-request`;
    } else if (typeof httpErrorResponse.error === 'string') {
      errorMessage = `${messageCodeSuffix}technical`;
    } else {
      errorMessage = `${messageCodeSuffix}${httpErrorResponse.error.code}`;
    }
    this.notify({ message: errorMessage, type: NotificationType.Error });
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
