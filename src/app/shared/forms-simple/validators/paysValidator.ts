import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { PaysModel } from 'src/app/shared/models';

export class PaysValidator {
  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const result = control.value as PaysModel;
      return result.code ? null : { 'type': true };
    };
  }
}
