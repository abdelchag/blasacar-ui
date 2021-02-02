import { FormControl, ValidationErrors } from '@angular/forms';

import * as moment from 'moment';

export class DateValidator {
  static valid(control: FormControl): ValidationErrors | null {
    if (!control.value) {
      return { required: { value: control.value } };
    }
    const frenchDate = moment(control.value, 'DD/MM/YYYY', true);

    if (!frenchDate.isValid()) {
      return { valid: { value: control.value } };
    }

    const minDate = new Date(1900, 0, 1);
    const maxDate = new Date(2100, 0, 1);
    const date = frenchDate.toDate();
    const rangeValid = date > minDate && date < maxDate;

    return rangeValid ? null : { range: { value: control.value } };
  }

  static parse(value: any): Date | null {
    // Pas de valeur fournie
    if (!value) {
      return null;
    }

    // La valeur fournie est déjà une date
    if (moment.isDate(value)) {
      return value as Date;
    }

    // La valeur fournie est au format jj/mm/aaaa
    const frenchDate = moment(value, 'DD/MM/YYYY', true);
    if (frenchDate.isValid()) {
      return frenchDate.toDate();
    }

    // La valeur fournie est au format aaaa-mm-jjThh:hh:ss (ISO8601)
    const isoDate = moment(value, moment.ISO_8601);
    if (isoDate.isValid()) {
      return isoDate.toDate();
    }

    return null;
  }
}
