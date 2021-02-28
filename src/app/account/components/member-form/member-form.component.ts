import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { civilites } from 'src/app/constants';
import { ToastNotificationService } from 'src/app/core/services';
import { Helpers } from 'src/app/helpers';
import { AdresseModel, ListItemModel } from 'src/app/shared/models';
import { AccountManagementProxyService } from 'src/app/shared/proxy-services/account-management.proxy.service';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { UserModel } from '../../models/user.model';
import { MembreService } from '../services/membre.service';


@Component({
  selector: 'blasacar-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  formGroup: FormGroup;
  user: UserModel;
  step: number;
  form: FormGroup;
  civilites: ListItemModel[] = [];
  userToAdd: UserModel = new UserModel();
  labelBtn: string;
  isBirthDateValid = true;
  stepNomPrenom = false;
  stepBirthDate = false;
  stepEmail = true;
  stepTelephone = false;
  stepAdresse = false;
  stepGender = false;
  stepPassword = false;

  constructor(
    private readonly membreService: MembreService,
    private readonly currentUserService: CurrentUserService,
    private toastNotificationService: ToastNotificationService,
    private readonly router: Router,
    private readonly accountManagementProxy: AccountManagementProxyService,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({});
    this.civilites = civilites;
    this.labelBtn = 'Suivant';
    this.step = 0;
  }

  putBirthDate(birthDate: Date): void {
    this.isBirthDateValid = true;
    this.userToAdd.birthDate = birthDate;
  }

  retour(): void {

    if (this.stepNomPrenom) {
      this.disableForm();
      this.stepEmail = true;
      return;
    }

    if (this.stepBirthDate) {
      this.disableForm();
      this.stepNomPrenom = true;
      return;
    }

    if (this.stepTelephone) {
      // this.disableForm();
      this.stepBirthDate = true;
      return;
    }

    if (this.stepAdresse) {
      this.disableForm();
      this.stepTelephone = true;
      return;
    }

    if (this.stepGender) {
      this.disableForm();
      this.stepAdresse = true;
      return;
    }

    if (this.stepPassword) {
      this.disableForm();
      this.stepGender = true;
      return;
    }
  }

  disableForm(): void {
    this.stepNomPrenom = false;
    this.stepBirthDate = false;
    this.stepEmail = false;

    this.stepTelephone = false;
    this.stepAdresse = false;
    this.stepGender = false;
    this.stepPassword = false;

  }

  submit(): void {

    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }

    this.isBirthDateValid = this.stepBirthDate && !!this.userToAdd.birthDate;
    if (this.stepBirthDate && !this.isBirthDateValid) {
      return;
    }

    // this.step++;

    if (this.stepEmail) {
      this.disableForm();
      this.stepNomPrenom = true;
      return;
    }
    if (this.stepNomPrenom) {

      this.disableForm();
      this.stepBirthDate = true;
      return;
    }

    if (this.stepBirthDate) {
      this.disableForm();
      this.stepTelephone = true;
      return;
    }

    if (this.stepTelephone) {

      this.disableForm();
      this.stepAdresse = true;
      return;
    }

    if (this.stepAdresse) {

      this.disableForm();
      this.stepGender = true;
      return;
    }

    if (this.stepGender) {

      this.disableForm();
      this.stepPassword = true;
      return;
    }

    switch (this.step) {
      case 1:
        this.userToAdd.email = this.form.value.email;
        this.stepNomPrenom = true;
        break;
      case 2:
        this.userToAdd.firstName = this.form.value.firstName;
        this.userToAdd.lastName = this.form.value.lastName;
        this.stepBirthDate = true;
        break;
      case 4:
        this.userToAdd.telephone = this.form.value.telephone;
        break;
      case 5:
        const adressePrincipale: AdresseModel = new AdresseModel();

        Object.assign(adressePrincipale, this.form.value.adresse);
        this.userToAdd.address = adressePrincipale.adresse;
        break;
      case 6:
        this.userToAdd.gender = this.form.value.gender;
        break;
      case 7:
        this.userToAdd.password = this.form.value.password;
        break;
      default:
        break;

    }

    if (this.step === 6) {
      this.labelBtn = 'Terminer l\'inscription';
    }

    if (this.step === 7) {
      this.user = Object.assign(new UserModel(), this.formGroup.value);
      console.log(this.userToAdd);

      this.membreService.saveMembre(this.user);


      this.accountManagementProxy
        .saveMembre(this.userToAdd)
        .pipe(
          finalize(() => console.log(this.userToAdd))
        )
        .subscribe(
          externalUserResponse => {
            this.currentUserService.emitCurrentUser(externalUserResponse);
            this.toastNotificationService.notify({
              type: 'success',
              message: 'votre inscription est validée'
            });
            this.router.navigate(['/']);
          },
          erreur => this.toastNotificationService.notifyHttpError(erreur)
        );
    }
  }
}
