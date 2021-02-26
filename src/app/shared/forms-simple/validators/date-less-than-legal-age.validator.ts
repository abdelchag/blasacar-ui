import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';

export class DateLessThanLegalAgeValidator {
  static validate(formGroup: FormGroup, formControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        const selectedDate = moment(control.value, 'DD/MM/YYYY', true);
        if (!selectedDate.isValid()) {
          return { valid: true };
        }
        const dateReferenceControl = formGroup.get(formControlName);
        if (!dateReferenceControl || !dateReferenceControl.value) {
          return null;
        }

        const momentDateNaissance = moment(dateReferenceControl.value, 'DD/MM/YYYY', true);

        if (selectedDate.diff(momentDateNaissance, 'years', true) < 16) {
          return { lessThanTheLegalAge: true };
        }

        return null;
      }
    };
  }
}
