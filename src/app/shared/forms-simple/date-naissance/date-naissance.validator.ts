import { ValidateFn } from 'codelyzer/walkerFactory/walkerFn';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import * as moment from 'moment';

export class DateNaissanceValidator {
  static valid(): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {
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
    };
  }
}
