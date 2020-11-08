import { NgModule } from '@angular/core';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login'; 

@NgModule({
  declarations: [],
  exports: [SocialLoginModule],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('772865753446348'),
        }
      ]
    } as SocialAuthServiceConfig
  }]
})
export class SocialModule { }
