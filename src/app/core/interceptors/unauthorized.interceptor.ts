import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { httpErrorCode } from 'app/constants';
import { Helpers } from 'app/helpers';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      catchError(response => {
        if (response instanceof HttpErrorResponse) {
          if (response.status === httpErrorCode.Unauthorized) {
            Helpers.reloadPage();
          }
        }
        return throwError(response);
      }));
  }

}
