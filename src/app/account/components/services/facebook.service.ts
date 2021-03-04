import { Injectable } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { from, Observable, of } from 'rxjs';
import { flatMap, mergeMap } from 'rxjs/operators';
import { AccountManagementProxyService } from 'src/app/shared/proxy-services/account-management.proxy.service';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { ExternalUserResponse } from '../../models/blasa-car-user';
import { BlasacarSocialUser } from '../../models/blasacar-social-user';

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

  public facebookConnexion(): Observable<ExternalUserResponse> {
    return this.getFacebookUser().pipe(
      mergeMap(faceUser => this.accountManagementProxy.connectFacebookUser(faceUser)),
      mergeMap(externalUserResponse => {
        this.currentUserService.emitCurrentUser(externalUserResponse);
        return of(externalUserResponse);
      })
    );
  }

  public facebookInscription(faceUser: BlasacarSocialUser): Observable<ExternalUserResponse> {
    return this.accountManagementProxy.registerFacebookUser(faceUser).pipe(
      mergeMap(externalUserResponse => {
        this.currentUserService.emitCurrentUser(externalUserResponse);
        return of(externalUserResponse);
      })
    );
  }

  public facebookDeconnexion(): Observable<void> {
    return this.accountManagementProxy.deconnectFacebookUser().pipe(
      mergeMap(() => of(this.currentUserService.deconnectCurrentUser()))
    );
  }

  public getFacebookUser(): Observable<SocialUser> {
    return from(this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID));
  }

}
