import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
    private readonly modalRef: BsModalRef,
    private readonly facebookService: FacebookService
  ) { }

  ngOnInit(): void {
  }

  registerFacebook(): void {
    this.errors = [];
    if (Utils.isNullOrUndefined(this.user.sex)) {
      this.errors.push('shared.error.sexe-mondatory');
    }

    if (Utils.isNullOrUndefined(this.user.birthDate)) {
      this.errors.push('shared.error.birthday-mondatory');
    }
    if (Utils.isArrayEmpty(this.errors)) {
      this.facebookService.facebookInscription(this.user);
      this.modalRef.hide();
    }
  }

  putSexe(sexe: SexeEnum): void {
    this.user.sex = sexe;
  }

  putBirthDate(birthDate: Date): void {
    this.user.birthDate = birthDate;
  }
}
