import {GenderEnum} from '../../shared/models/gender.enum';

export interface BlasaCarUser {
    adresse: string;
    birthDate: Date;
    email: string;
    firstName: string;
    lastName: string;
    gender: GenderEnum;
    telephone: string;
}

export interface ExternalUserResponse {
  data: BlasaCarUser;
  message: string;
  succeeded: boolean;
  token: string;
  expiration: Date;
}
