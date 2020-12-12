import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'blasacar-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  formGroup: FormGroup;
  user: UserModel;
  step = 0;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      civilite: new FormControl(''),
      dateNaissance: new FormControl(''),
      telephone: new FormControl(''),
      adresse: new FormControl(''),
      email: new FormControl(''),
      motDePasse: new FormControl(''),
    });

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
    return this.formGroup.get('email');
  }

  get formControlNom() {
    return this.formGroup.get('nom');
  }

  get formControlPrenom() {
    return this.formGroup.get('prenom');
  }

  get formControlDateNaissance() {
    return this.formGroup.get('dateNaissance');
  }

  get formControlTelephone() {
    return this.formGroup.get('telephone');
  }

  get formControlAdresse() {
    return this.formGroup.get('adresse');
  }

  get formControlmotDePasse() {
    return this.formGroup.get('motDePasse');
  }

  submit(): void {

    this.step++;

    if (this.step === 7) {
      this.user = Object.assign(new UserModel(), this.formGroup.value);
      console.log(this.user);

    }


  }

}
