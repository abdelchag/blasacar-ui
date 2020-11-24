import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocialUser } from 'angularx-social-login';
import { SexeEnum } from 'src/app/shared/models/sexe.enum';
import { Utils } from 'src/utils/utils';
import { BlasacarSocialUser } from '../../models/blasacar-social-user';
import { FacebookService } from '../services/facebook.service';

@Component({
  selector: 'blasacar-face-info-supp-popup',
  templateUrl: './face-info-supp-popup.component.html',
  styleUrls: ['./face-info-supp-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaceInfoSuppPopupComponent implements OnInit {

  errors: string[] = [];

  sexeEnum = SexeEnum;
  user: BlasacarSocialUser;

  constructor(
    public dialogRef: MatDialogRef<FaceInfoSuppPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public socialUser: SocialUser,
    private readonly facebookService: FacebookService) {
    this.user = socialUser;
  }

  ngOnInit(): void {
  }

  registerFacebook(): void {
    this.errors = [];
    if (Utils.isNullOrUndefined(this.user.sexe)) {
      this.errors.push('shared.error.sexe-mondatory');
    }

    if (Utils.isNullOrUndefined(this.user.birthdayDate)) {
      this.errors.push('shared.error.birthday-mondatory');
    }
    if (Utils.isArrayEmpty(this.errors)) {
      this.facebookService.facebookInscription(this.user);
      this.dialogRef.close();
    }
  }

  putSexe(sexe: SexeEnum): void {
    this.user.sexe = sexe;
  }
}