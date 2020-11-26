import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable, of } from 'rxjs';
import { BlasaCarUser } from 'src/app/account/models/blasa-car-user';
import { BlasacarSocialUser } from 'src/app/account/models/blasacar-social-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementProxyService {

  ACCOUNT_MANAGEMENT_URL = '/api/access-management';

  constructor(private readonly http: HttpClient) { }

  public connectFacebookUser(socialUser: SocialUser): Observable<BlasaCarUser> {
    // TODO : call api
    console.log('connect : ', socialUser);
    return of({
      token: socialUser.authToken,
      firstName: socialUser.firstName,
      lastName: socialUser.lastName
    });
  }

  public registerFacebookUser(socialUser: BlasacarSocialUser): Observable<BlasaCarUser> {
    // TODO : call api
    console.log('register : ', socialUser);
    return this.http.post<BlasaCarUser>(`${this.ACCOUNT_MANAGEMENT_URL}/UserFaceBook/register`, socialUser);
  }

  public deconnectFacebookUser(): Observable<any> {
    console.log('deconnecte');
    return of(null);
  }



}
