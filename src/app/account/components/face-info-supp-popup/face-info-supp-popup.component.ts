import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GenderEnum } from 'src/app/shared/models/gender.enum';
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

  genderEnum = GenderEnum;
  user: BlasacarSocialUser;

  constructor(
    private readonly modalRef: BsModalRef,
    private readonly facebookService: FacebookService
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  registerFacebook(): void {
    this.errors = [];
    if (Utils.isNullOrUndefined(this.user.gender)) {
      this.errors.push('shared.error.gender-mondatory');
    }

    if (Utils.isNullOrUndefined(this.user.birthDate)) {
      this.errors.push('shared.error.birthday-mondatory');
    }
    if (Utils.isArrayEmpty(this.errors)) {
      this.facebookService.facebookInscription(this.user);
      this.modalRef.hide();
    }
  }

  putGender(gender: GenderEnum): void {
    this.user.gender = gender;
  }

  putBirthDate(birthDate: Date): void {
    this.user.birthDate = birthDate;
  }
}
