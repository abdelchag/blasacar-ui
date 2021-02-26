import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class SignatureEmailValidator {
  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return { requiredEmailSignature: true };
      }
      return null;
    };
  }
}
