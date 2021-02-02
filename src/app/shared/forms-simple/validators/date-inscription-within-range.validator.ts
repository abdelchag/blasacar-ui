import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';

export class DateInscriptionWithinRangeValidator {
  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        const selectedDate = moment(control.value, 'DD/MM/YYYY', true);
        if (!selectedDate.isValid()) {
          return { valid: { value: control.value } };
        }

        const retroactiveDateLimit = moment().subtract(4, 'month');
        const prospectiveDateLimit = moment().add(4, 'month');

        if (!retroactiveDateLimit.isBefore(selectedDate)) {
          return { 'lessThanTheCurrentDate': true };
        }

        if (!prospectiveDateLimit.isAfter(selectedDate)) {
          return { 'greaterThanTheCurrentDate': true };
        }

        return null;
      }
    };
  }
}
