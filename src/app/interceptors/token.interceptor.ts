import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../shared/services/current-user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private readonly currentUserService: CurrentUserService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.currentUserService.isUserConnected) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.currentUserService.currentUserAllInfos.token}`
        }
      });
    }
    return next.handle(request);
  }
}
