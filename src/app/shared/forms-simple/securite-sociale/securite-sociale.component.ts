import { Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject, merge } from 'rxjs';

import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';

import { BaseSimpleComponent } from '../base-simple.component';
import { securiteSociale, SecuriteSocialeValidator } from './securite-sociale.validator';

@Component({
  selector: 'app-securite-sociale',
  templateUrl: './securite-sociale.component.html',
  styles: []
})
export class SecuriteSocialeComponent extends BaseSimpleComponent implements OnInit {
  private _dateNaissance = new BehaviorSubject<Date>(null);
  private _genreCode = new BehaviorSubject<string>(null);

  @Input()
  set dateNaissance(value: Date) {
    this._dateNaissance.next(value);
  }

  @Input()
  set genreCode(value: string) {
    this._genreCode.next(value);
  }

  maskOptions = {
    mask: [/\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /[0-9ABab]/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/],
    keepCharPositions: true,
    pipe: (value: string) => value.toUpperCase(),
    guide: false
  };

  constructor(
    validationMessageService: ValidationMessageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {

    this.validationMessages = configuration.validationMessages.securiteSociale;

    // Si on mets explicitement null dans la propriété this.validators, on utilise le nouveau validateur
    // TODO Migrer dans les différents composants et supprimer cette condition
    if (this.validators && !this.validators.length) {
      this.validators.push(SecuriteSocialeValidator.validate(this._dateNaissance, this._genreCode));
    } else {
      this.validators = [securiteSociale];
    }

    super.ngOnInit();

    this.subscriptions.push(
      merge([this._dateNaissance, this._genreCode])
        .subscribe(value => {
          if (value) {
            this.formControl.updateValueAndValidity();
            this.error = this.getError();
          }
        }));

  }

  get crossFieldError() {
    const [first] = Object.keys(this.formGroup.errors);
    return this.validationMessages[first];
  }
}
