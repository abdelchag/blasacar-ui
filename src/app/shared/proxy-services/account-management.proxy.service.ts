import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { BlasaCarUser } from 'src/app/account/models/blasa-car-user';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementProxyService {

  constructor(private readonly http: HttpClient) { }

  public connectFacebookUser(socialUser: SocialUser): BlasaCarUser {
    // TODO : call api
    console.log("connect : ", socialUser);
    return {};
  }

  public registerFacebookUser(socialUser: SocialUser): BlasaCarUser {
    // TODO : call api
    console.log("register : ", socialUser);
    return {};
  }



}
