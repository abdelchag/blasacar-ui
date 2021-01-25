import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BlasaCarUser, ExternalUserResponse} from 'src/app/account/models/blasa-car-user';
import {BlasacarSocialUser} from 'src/app/account/models/blasacar-social-user';
import {SocialUser} from 'angularx-social-login/entities/social-user';

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
      token: socialLoginUser.authToken,
      firstName: socialLoginUser.firstName,
      lastName: socialLoginUser.lastName
    });*/
  }

  public registerFacebookUser(socialUser: BlasacarSocialUser): Observable<ExternalUserResponse> {
    return this.http.post<ExternalUserResponse>(`${this.ACCOUNT_MANAGEMENT_URL}/external-user/register`, socialUser);
    /*console.log('connect : ', socialUser);
    return of({
      token: socialUser.authToken,
      firstName: socialUser.firstName,
      lastName: socialUser.lastName
    });*/
  }

  public deconnectFacebookUser(): Observable<any> {
    console.log('deconnecte');
    return of(null);
  }


}
