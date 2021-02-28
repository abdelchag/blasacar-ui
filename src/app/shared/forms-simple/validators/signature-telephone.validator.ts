import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class SignatureTelephoneValidator {
  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return { requiredTelephoneSignature: true };
      }
      return null;
    };
  }
}
