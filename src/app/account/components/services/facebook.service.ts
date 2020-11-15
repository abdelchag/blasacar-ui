import { Injectable } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { AccountManagementProxyService } from 'src/app/shared/proxy-services/account-management.proxy.service';
import { BlasaCarUser } from '../../models/blasa-car-user';
import { BlasacarSocialUser } from '../../models/blasacar-social-user';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(
    private readonly socialAuthService: SocialAuthService,
    private readonly accountManagementProxy: AccountManagementProxyService
  ) { }

  public facebookConnexion(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      return this.accountManagementProxy.connectFacebookUser(user);
    });
  }

  public facebookInscription(user: BlasacarSocialUser): void {
      this.accountManagementProxy.registerFacebookUser(user);
  }

  public getFacebookUser(): Promise<SocialUser> {
    return this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
