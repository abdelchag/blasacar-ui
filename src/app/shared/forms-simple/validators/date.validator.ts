import { AbstractControl, ValidationErrors } from '@angular/forms';

import * as moment from 'moment';

export class DateValidator {

  static future(control: AbstractControl): ValidationErrors | null {
    if (control.value) {

      const date = moment(control.value, 'DD/MM/YYYY', true);
      if (!date.isValid()) {
        return { valid: { value: control.value } };
      }

      const today = moment();
      if (date.isAfter(today)) {
        return { future: { value: control.value } };
      }

      return null;
    }
  }

}
