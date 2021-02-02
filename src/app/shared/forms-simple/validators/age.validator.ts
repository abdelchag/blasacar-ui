import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';

import { Helpers } from 'src/app/helpers';

export class AgeValidator {

  static greaterOrEqualThan(referenceAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {

        const frenchDate = moment(control.value, 'DD/MM/YYYY', true);
        if (!frenchDate.isValid()) {
          return { valid: { value: control.value } };
        }

        const date = frenchDate.toDate();
        if (date) {
          if (!Helpers.isAgeOverThan(date, referenceAge)) {
            return { ageGreaterOrEqualThan: { value: control.value } };
          }
        }

        return null;
      }
    };
  }

  static lessThan(referenceAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {

        const frenchDate = moment(control.value, 'DD/MM/YYYY', true);
        if (!frenchDate.isValid()) {
          return { valid: { value: control.value } };
        }

        const date = frenchDate.toDate();
        if (date) {
          if (Helpers.isAgeOverThan(date, referenceAge)) {
            return { ageLesserThan: { value: control.value } };
          }
        }

        return null;
      }
    };
  }

}
