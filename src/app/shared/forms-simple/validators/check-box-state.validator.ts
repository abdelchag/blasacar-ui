import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CheckBoxStateValidator {
  static validate(state: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return Boolean(control.value) === state ? null : { checked: true };
    };
  }
}
