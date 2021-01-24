import {Injectable} from '@angular/core';
import {FacebookLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {AccountManagementProxyService} from 'src/app/shared/proxy-services/account-management.proxy.service';
import {CurrentUserService} from 'src/app/shared/services/current-user.service';
import {BlasacarSocialUser} from '../../models/blasacar-social-user';
import {SocialLoginUser} from '../../models/social-login-user';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(
    private readonly socialAuthService: SocialAuthService,
    private readonly accountManagementProxy: AccountManagementProxyService,
    private readonly currentUserService: CurrentUserService
  ) {
  }

  public facebookConnexion(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(faceUser => {
      const faceLoginUser: SocialLoginUser = {
        email: faceUser.email,
        providerLabel: faceUser.provider
      };
      return this.accountManagementProxy.connectFacebookUser(faceLoginUser).subscribe(blasaCarUser => {
        this.currentUserService.emitCurrentUser(blasaCarUser);
      });
    });
  }

  public facebookInscription(faceUser: BlasacarSocialUser): void {
    this.accountManagementProxy.registerFacebookUser(faceUser).subscribe(blasaCarUSer => {
      this.currentUserService.emitCurrentUser(blasaCarUSer);
    });
  }

  public facebookDeconnexion(): void {
    this.accountManagementProxy.deconnectFacebookUser().subscribe(() => {
      this.currentUserService.deconnectCurrentUser();
    });
  }

  public getFacebookUser(): Promise<SocialUser> {
    return this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
