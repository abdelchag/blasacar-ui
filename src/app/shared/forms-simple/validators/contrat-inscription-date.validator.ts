import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ContratInscriptionDateValidator {
  static validate(dateEntree: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const currentTime = new Date();
      const currentDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());

      if (control.value) {
        const date = new Date(control.value);

        if (date < dateEntree) {
          return { 'lowerThenDateEntree': true };
        } else if (date < currentDate) {
          return { 'lowerThenCurrentDate': true };
        }

        return null;
      }

    };

  }
}
