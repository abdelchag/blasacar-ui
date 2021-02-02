import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CpVilleModel } from 'src/app/shared/models';

export class CpVilleValidator {
  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const result = control.value as CpVilleModel;
      return result.codeInsee ? null : { 'type': true };
    };
  }
}
