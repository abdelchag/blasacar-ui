import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';

export class DateNaissanceComparisonValidator {
  static validate(dateEmbauche: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        const selectedDate = moment(control.value, 'DD/MM/YYYY', true);
        if (!selectedDate.isValid()) {
          return { notValid: true };
        }

        const selectedDateEmbauche = moment(dateEmbauche, 'DD/MM/YYYY', true);
        if (selectedDate.isSameOrAfter(selectedDateEmbauche)) {
          return { greaterThanDateEmbauche: { value: control.value } };
        }

        if (selectedDateEmbauche.diff(selectedDate, 'years') < 14) {
          return { invalidEmbaucheAge: { value: control.value } };
        }

        return null;
      }
    };
  }
}
