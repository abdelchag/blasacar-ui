import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

import { civilite, genre } from 'src/app/constants';
import { Helpers } from 'src/app/helpers';

export class SecuriteSocialeValidator {

  static validate(birthDate?: BehaviorSubject<Date>, gender?: BehaviorSubject<string>): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        const value: string = control.value.replace(/\s/g, '');
        const match = value.match(
          /^([123478])(\d{2})(0[1-9]|1[0-2])(?:\d{2}|2[AB])\d{3}\d{3}\d{2}$/
        );

        if (match) {
          if (gender) {
            if (!this.genreValid(gender, +match[1])) {
              return { gender: true };
            }
          }

          if (birthDate) {
            const error = this.dateNaissanceValid(birthDate, match[2], match[3]);
            if (error) {
              return error;
            }
          }

          if (!this.cleValid(value)) {
            return { pattern: true };
          }
        } else {
          return { pattern: true };
        }

        return null;
      }
    };
  }

  static genreValid(gender: BehaviorSubject<string>, nbrGender: number): boolean {
    const strGender: string = gender.getValue();
    if (strGender) {
      if (strGender === genre.FEMININ || strGender === civilite.MADAME) {
        return nbrGender === 2 || nbrGender === 4 || nbrGender === 8;
      } else if (strGender === genre.MASCULIN || strGender === civilite.MONSIEUR) {
        return nbrGender === 1 || nbrGender === 3 || nbrGender === 7;
      } else {
        return false;
      }
    }
    return false;
  }

  static dateNaissanceValid(birthDate: BehaviorSubject<Date>, strYear: string, strMonth: string): ValidationErrors | null {
    const dateString = birthDate.getValue();
    if (!dateString) {
      return null;
    }
    const frenchDate = moment(dateString, 'DD/MM/YYYY', true);
    const date = frenchDate.toDate();
    const year = date
      .getFullYear()
      .toString()
      .substr(2);
    const month = date.getMonth() + 1;

    if (year !== strYear) {
      return { year: true };
    }

    if (month !== +strMonth) {
      return { month: true };
    }

    return null;
  }

  static cleValid(value: string): boolean {
    const numWithoutKey = value.substring(0, value.length - 2);
    const key = value.substr(value.length - 2, 2);

    //  convert chars to ints
    const digits = numWithoutKey.replace('2A', '19').replace('2B', '18');

    // final check
    return 97 - Helpers.mod97(digits) === +key;
  }

}

const securiteSocialeRegex = /^([123478])(\d{2})(0[1-9]|1[0-2])(?:\d{2}|2[AB])\d{3}\d{3}\d{2}$/;
const genresFeminins = ['2', '4', '8'];
const genresMasculins = ['1', '3', '7'];

export const securiteSociale = (control: FormControl): ValidationErrors | null => {
  if (!control.value) {
    return null;
  }

  const value = (control.value as string).replace(/\s/g, ''); // Enlève les espaces
  const match = value.match(securiteSocialeRegex);

  if (!match) {
    return { pattern: true };
  }

  if (!cleValid(value)) {
    return { pattern: true };
  }

};

export const securiteSocialeGenre = (securiteSocialeControlName: string, genreControlName: string) => {
  return (form: FormGroup): ValidationErrors | null => {
    const securiteSocialeControl = form.get(securiteSocialeControlName);
    const genreControl = form.get(genreControlName);

    if (!(securiteSocialeControl && securiteSocialeControl.value && securiteSocialeControl.valid)) {
      return null;
    }

    if (!(genreControl && genreControl.value && genreControl.valid)) {
      return null;
    }

    const value = (securiteSocialeControl.value as string).replace(/\s/g, '');
    const match = value.match(securiteSocialeRegex);
    const [_, numeroGenre] = match;

    if (genreControl.value === genre.FEMININ || genreControl.value === civilite.MADAME) {
      return genresFeminins.includes(numeroGenre) ? null : { securiteSocialeGenre: true };
    }

    if (genreControl.value === genre.MASCULIN || genreControl.value === civilite.MONSIEUR) {
      return genresMasculins.includes(numeroGenre) ? null : { securiteSocialeGenre: true };
    }

  };
};

export const securiteSocialeDateNaissance = (securiteSocialeControlName: string, dateNaissanceControlName: string) => {
  return (form: FormGroup): ValidationErrors | null => {
    const securiteSocialeControl = form.get(securiteSocialeControlName);
    const dateNaissanceControl = form.get(dateNaissanceControlName);

    if (!(securiteSocialeControl && securiteSocialeControl.value && securiteSocialeControl.valid)) {
      return null;
    }

    if (!(dateNaissanceControl && dateNaissanceControl.value && dateNaissanceControl.valid)) {
      return null;
    }

    const value = (securiteSocialeControl.value as string).replace(/\s/g, '');
    const match = value.match(securiteSocialeRegex);
    const [, , annee, mois] = match;

    const m = moment(dateNaissanceControl.value, 'DD/MM/YYYY', true);

    if (m.format('YY') !== annee) {
      return { securiteSocialeAnnee: true };
    }

    if (m.format('MM') !== mois) {
      return { securiteSocialeMois: true };
    }

  };
};

function cleValid(value: string): boolean {
  const numWithoutKey = value.substring(0, value.length - 2);
  const key = value.substr(value.length - 2, 2);

  // Convertit les lettres en entiers
  const digits = numWithoutKey.replace('2A', '19').replace('2B', '18');

  // modulo 97
  return 97 - Helpers.mod97(digits) === +key;
}
