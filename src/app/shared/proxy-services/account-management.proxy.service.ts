import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login/entities/social-user';
import { Observable, of } from 'rxjs';
import { ExternalUserResponse } from 'src/app/account/models/blasa-car-user';
import { BlasacarSocialUser } from 'src/app/account/models/blasacar-social-user';
import { UserModel } from 'src/app/account/models/user.model';
import { LoginModel } from 'src/app/account/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementProxyService {

  ACCOUNT_MANAGEMENT_URL = '/api/access-management';

  constructor(private readonly http: HttpClient) {
  }

  public connectFacebookUser(socialLoginUser: SocialUser): Observable<ExternalUserResponse> {
    return this.http.post<ExternalUserResponse>(`${this.ACCOUNT_MANAGEMENT_URL}/external-user/login`, socialLoginUser);
    /*console.log('connect : ', socialLoginUser);
    return of({
      data: {
        firstName: socialLoginUser.firstName,
        lastName: socialLoginUser.lastName,
        email: socialLoginUser.email
      },
      token: socialLoginUser.authToken
    }
    );*/
  }

  public registerFacebookUser(socialUser: BlasacarSocialUser): Observable<ExternalUserResponse> {
    return this.http.post<ExternalUserResponse>(`${this.ACCOUNT_MANAGEMENT_URL}/external-user/register`, socialUser);
    /*return of({
      data: {
        firstName: socialUser.firstName,
        lastName: socialUser.lastName,
        email: socialUser.email
      },
      token: socialUser.authToken
    }
    );*/
  }

  public deconnectFacebookUser(): Observable<any> {
    return of(null);
  }

  public saveMembre(user: UserModel): Observable<any> {
    const url = `${this.ACCOUNT_MANAGEMENT_URL}/User/register`;
    return this.http.post<ExternalUserResponse>(url, user);
  }

  public loginMembre(user: LoginModel): Observable<any> {
    const url = `${this.ACCOUNT_MANAGEMENT_URL}/User/login`;
    return this.http.post<ExternalUserResponse>(url, user);
  }

}
