import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { MembreService } from '../services/membre.service';

import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Helpers } from 'src/app/helpers';
import { AdresseModel, ListItemModel } from 'src/app/shared/models';
import { civilites } from 'src/app/constants';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';

@Component({
  selector: 'blasacar-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  formGroup: FormGroup;
  user: UserModel;
  step = 0;
  form: FormGroup;
  civilites: ListItemModel[] = [];
  userToAdd: UserModel = new UserModel();

  constructor(
    private readonly membreService: MembreService,
    private readonly currentUserService: CurrentUserService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      lastName: new FormControl(''),
      firstName: new FormControl(''),
      gender: new FormControl(''),
      birthDate: new FormControl(''),
      telephone: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
    this.form = new FormGroup({});
    this.civilites = civilites;
  }

  get disableSubmit() {

    if (this.step === 0 && this.formControlEmail.invalid) {
      return true;
    }

    if (this.step === 2 && this.formControlDateNaissance.invalid ) {
      return true;
    }

    if (this.step === 3 && this.formControlTelephone.invalid ) {
      return true;
    }

    if (this.step === 4 && this.formControlAdresse.invalid ) {
      return true;
    }

    if (this.step === 6 && this.formControlmotDePasse.invalid ) {
      return true;
    }
    if (this.step === 1 && (this.formControlNom.invalid || this.formControlPrenom.invalid)) {
      return true;
    }
    return false;
  }

  get formControlEmail() {
    return this.form.get('email');
  }

  get formControlNom() {
    return this.form.get('lastName');
  }

  get formControlPrenom() {
    return this.form.get('firstName');
  }

  get formControlDateNaissance() {
    return this.form.get('birthDate');
  }

  get formControlTelephone() {
    return this.form.get('telephone');
  }

  get formControlAdresse() {
    return this.form.get('address');
  }

  get formControlmotDePasse() {
    return this.form.get('password');
  }

  get formControlGender() {
    return this.form.get('gender');
  }

  putBirthDate(birthDate: Date): void {
    this.userToAdd.birthDate = birthDate;
  }

  submit(): void {


    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }

    this.step++;



    switch (this.step) {
      case 1:
        this.userToAdd.email = this.form.value.email;
        break;
      case 2:
        this.userToAdd.firstName = this.form.value.firstName;
        this.userToAdd.lastName = this.form.value.lastName;
        break;
      case 3:
        this.userToAdd.birthDate = this.formControlDateNaissance.value;
        break;
      case 4:
        this.userToAdd.telephone = this.form.value.telephone;
        break;
      case 5:
        let adressePrincipale: AdresseModel = new AdresseModel();

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

    if (this.step === 7) {
      this.user = Object.assign(new UserModel(), this.formGroup.value);
      console.log(this.userToAdd);
      //this.membreService.saveMembre(this.user);

      this.membreService
      .saveMembre(this.userToAdd)
      .pipe(
        finalize(() => console.log(this.userToAdd))
      )
      .subscribe(
        externalUserResponse => {
          this.currentUserService.emitCurrentUser(externalUserResponse);
          console.log(this.userToAdd);
        },
        erreur => console.log(erreur)
      );
    }


  }

}
