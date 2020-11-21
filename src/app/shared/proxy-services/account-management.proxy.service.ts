import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlasaCarUser } from 'src/app/account/models/blasa-car-user';
import { BlasacarSocialUser } from 'src/app/account/models/blasacar-social-user';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementProxyService {

  constructor(private readonly http: HttpClient) { }

  public connectFacebookUser(socialUser: BlasaCarUser): Observable<BlasaCarUser> {
    // TODO : call api
    console.log("connect : ", socialUser);
    return of({});
  }

  public registerFacebookUser(socialUser: BlasacarSocialUser): Observable<BlasaCarUser> {
    // TODO : call api
    console.log("register : ", socialUser);
    return of({});
  }

  public deconnectFacebookUser(): Observable<any> {
    console.log("deconnecte");
    return of(null);
  }



}
