import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function sameValueValidator(formGroup: FormGroup, formControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const otherControl = formGroup.get(formControlName);
    if (!otherControl) {
      return null;
    }

    const isSameValue = control.value === otherControl.value;
    return isSameValue ? null : { sameValue: true };
  };
}
