import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BlasaCarUser} from 'src/app/account/models/blasa-car-user';
import {BlasacarSocialUser} from 'src/app/account/models/blasacar-social-user';
import {SocialLoginUser} from '../../account/models/social-login-user';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementProxyService {

  ACCOUNT_MANAGEMENT_URL = '/api/access-management';

  constructor(private readonly http: HttpClient) {
  }

  public connectFacebookUser(socialLoginUser: SocialLoginUser): Observable<BlasaCarUser> {
    return this.http.post<BlasaCarUser>(`${this.ACCOUNT_MANAGEMENT_URL}/ExternalUser/login`, socialLoginUser);
    /*console.log('connect : ', socialLoginUser);
    return of({
      token: 'socialUser.authToken',
      firstName: 'firstName',
      lastName: 'lastName'
    });*/
  }

  public registerFacebookUser(socialUser: BlasacarSocialUser): Observable<BlasaCarUser> {
    return this.http.post<BlasaCarUser>(`${this.ACCOUNT_MANAGEMENT_URL}/ExternalUser/register`, socialUser);
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
