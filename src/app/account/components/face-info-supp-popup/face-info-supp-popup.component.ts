import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { forkJoin } from 'rxjs';
import { Helpers } from 'src/app/helpers';
import { GenderEnum } from 'src/app/shared/models/gender.enum';
import { BlasaUtils } from 'src/utils/blasa-utils';
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
  form: FormGroup;

  genderEnum = GenderEnum;
  user: BlasacarSocialUser;

  genderOptions = [];

  constructor(
    private readonly modalRef: BsModalRef,
    private readonly facebookService: FacebookService,
    private readonly translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({});
    this.buildGenders();
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  registerFacebook(): void {
    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }
    this.facebookService.facebookInscription(this.user)
      .subscribe(() => this.closeModal());
  }

  getGender(): string {
    return this.user.gender;
  }

  putGender(gender: GenderEnum): void {
    this.user.gender = gender;
  }

  putBirthDate(birthDate: Date): void {
    this.user.birthDate = birthDate;
  }

  private buildGenders(): void {
    forkJoin([
      this.translateService.get('face-info-supp.gender-choice.mrs'),
      this.translateService.get('face-info-supp.gender-choice.mr'),
      this.translateService.get('face-info-supp.gender-choice.other')
    ]).subscribe((results: string[]) => {
      this.genderOptions = [
        { code: GenderEnum.Mrs, libelle: results[0] },
        { code: GenderEnum.Mr, libelle: results[1] },
        { code: GenderEnum.Undefined, libelle: results[2] }
      ];
    });
  }

}
