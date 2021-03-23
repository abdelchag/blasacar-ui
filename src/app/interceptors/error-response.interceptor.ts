import {
  HttpErrorResponse, HttpEvent, HttpHandler,
  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastNotificationService } from '../core/services';

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {

  constructor(private readonly notificationService: ToastNotificationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        this.notificationService.notifyHttpError(errorResponse);
        return throwError(errorResponse);
      }));
  }

}
