import { Injectable } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AccountManagementProxyService } from 'src/app/shared/proxy-services/account-management.proxy.service';

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

  public facebookInscription(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      return this.accountManagementProxy.registerFacebookUser(user);
    });
  }

}
