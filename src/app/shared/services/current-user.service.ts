import { Injectable } from '@angular/core';
import { BlasaCarUser } from 'src/app/account/models/blasa-car-user';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private readonly SESSION_CURRENT_USER: string = "currentUser";

  private currentUserSubject = new Subject<BlasaCarUser>();

  constructor() { }

  get currentUser(): BlasaCarUser {
    return JSON.parse(localStorage.getItem(this.SESSION_CURRENT_USER));
  }

  public emitCurrentUser(user: BlasaCarUser): void {
    localStorage.setItem(this.SESSION_CURRENT_USER, JSON.stringify(user));
    this.currentUserSubject.next(this.currentUser);
  }

  public performCurrentUser(): void {
    const currentUser = JSON.parse(localStorage.getItem(this.SESSION_CURRENT_USER))
    this.currentUserSubject.next(this.currentUser);
  }

  public deconnectCurrentUser(): void {
    localStorage.removeItem(this.SESSION_CURRENT_USER);
    this.currentUserSubject.next(this.currentUser);
  }

  public currentUserSubscription(): Observable<BlasaCarUser> {
    return this.currentUserSubject;
  }

}
