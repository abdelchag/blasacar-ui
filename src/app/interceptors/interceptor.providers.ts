import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorResponseInterceptor } from './error-response.interceptor';
import { TokenInterceptor } from './token.interceptor';

export const INTERCEPTOR_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorResponseInterceptor,
    multi: true
  }
];
