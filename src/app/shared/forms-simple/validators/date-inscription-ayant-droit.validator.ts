import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';

export class DateInscriptionAyantDroitValidator {
  static validate(minDate: moment.Moment, isConjoint: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        const selectedDate = moment(control.value, 'DD/MM/YYYY', true);
        if (!selectedDate.isValid()) {
          return { valid: { value: control.value } };
        }

        const maxDate = minDate.clone().add(2, 'month');
        // const valid = selectedDate.isBetween(minDate, maxDate);
        if (selectedDate.isBefore(minDate)) {
          if (isConjoint) {
            return { 'lessThanTheDateUnion': true };
          } else {
            return { 'lessThanTheBirthDate': true };
          }
        }

        return null;
      }
    };
  }
}
