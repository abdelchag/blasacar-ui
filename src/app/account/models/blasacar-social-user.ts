import { SocialUser } from 'angularx-social-login';
import { SexeEnum } from 'src/app/shared/models/sexe.enum';

export declare class BlasacarSocialUser extends SocialUser {
    birthdayDate?: Date;
    sexe?: SexeEnum;
}
