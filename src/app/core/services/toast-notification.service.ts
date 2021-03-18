import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { httpErrorCode, NotificationType } from 'src/app/constants';
import { globalError } from 'src/app/global-error-constants';
import { ToastNotificationModel } from 'src/app/shared/models';

@Injectable()
export class ToastNotificationService {

  private notification: Subject<ToastNotificationModel> = new Subject<ToastNotificationModel>();
  notification$: Observable<ToastNotificationModel> = this.notification.asObservable();

  notify(value: ToastNotificationModel): void {
    this.notification.next(value);
  }

  notifyHttpError(httpErrorResponse: HttpErrorResponse): void {

    if (httpErrorResponse.status === httpErrorCode.BadRequest) {

      let error: ToastNotificationModel;
      if (typeof httpErrorResponse.error === 'string') {
        error = this.parseError(httpErrorResponse.error);
      } else {
        error = httpErrorResponse.error;
      }
      error.type = NotificationType.Error;
      this.notify(error);
    } else if (httpErrorResponse.status === httpErrorCode.InternalServerError) {
      this.notify({ message: globalError.TECHNICAL_ERROR, type: NotificationType.Error });
    } else if (httpErrorResponse.status === httpErrorCode.NotFound) {
      this.notify({ message: globalError.NOT_FOUND, type: NotificationType.Error });
    } else {
      this.notify({ message: httpErrorResponse.message, type: NotificationType.Error,
      listMessages: httpErrorResponse.error !== undefined ? httpErrorResponse.error.listMessages : null });
    }
  }

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
