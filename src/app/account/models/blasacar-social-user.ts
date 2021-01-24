import {SocialUser} from 'angularx-social-login';
import {GenderEnum} from 'src/app/shared/models/gender.enum';
import {SocialProvider} from '../../shared/models/social-provider.enum';

export declare class BlasacarSocialUser extends SocialUser {
  birthDate: Date;
  gender: GenderEnum;
  providerLabel: SocialProvider;
}
