import { Injectable } from '@angular/core';
import { BlasaCarUser, emptyBlasaCarUser, ExternalUserResponse } from 'src/app/account/models/blasa-car-user';
import { Observable, Subject, Subscription } from 'rxjs';
import { BlasaUtils } from 'src/utils/blasa-utils';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private readonly SESSION_CURRENT_USER: string = 'currentUser';

  private currentUserSubject = new Subject<ExternalUserResponse>();

  constructor() { }

  get isUserConnected(): boolean {
    return !BlasaUtils.isNullOrUndefined(this.currentUserAllInfos);
  }

  get currentUserAllInfos(): ExternalUserResponse {
    const currentUserStorage = localStorage.getItem(this.SESSION_CURRENT_USER);
    return !BlasaUtils.isNullOrUndefined(currentUserStorage) ? JSON.parse(currentUserStorage) : null;
  }

  get currentUser(): BlasaCarUser {
    return !BlasaUtils.isNullOrUndefined(this.currentUserAllInfos) ? this.currentUserAllInfos.data : emptyBlasaCarUser;
  }

  public emitCurrentUser(user: ExternalUserResponse): void {
    localStorage.setItem(this.SESSION_CURRENT_USER, JSON.stringify(user));
    this.currentUserSubject.next(this.currentUserAllInfos);
  }

  public performCurrentUser(): void {
    this.currentUserSubject.next(this.currentUserAllInfos);
  }

  public deconnectCurrentUser(): void {
    localStorage.removeItem(this.SESSION_CURRENT_USER);
    this.currentUserSubject.next(this.currentUserAllInfos);
  }

  public currentUserSubscription(): Observable<ExternalUserResponse> {
    return this.currentUserSubject;
  }

}
