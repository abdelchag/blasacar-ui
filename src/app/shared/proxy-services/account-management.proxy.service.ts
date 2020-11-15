import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { BlasaCarUser } from 'src/app/account/models/blasa-car-user';
import { BlasacarSocialUser } from 'src/app/account/models/blasacar-social-user';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementProxyService {

  constructor(private readonly http: HttpClient) { }

  public connectFacebookUser(socialUser: BlasaCarUser): BlasaCarUser {
    // TODO : call api
    console.log("connect : ", socialUser);
    return {};
  }

  public registerFacebookUser(socialUser: BlasacarSocialUser): BlasaCarUser {
    // TODO : call api
    console.log("register : ", socialUser);
    return {};
  }



}
