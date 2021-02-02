import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import * as moment from 'moment';

export class DateRadiationWithinRangeValidator {
  static validate(dateEffetAffiliation: moment.Moment, dateProchaineEcheance: moment.Moment): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        const selectedDate = moment(control.value, 'DD/MM/YYYY', true);
        if (!selectedDate.isValid()) {
          return { 'notValid': true };
        }

        let retroactiveDateLimit = moment().subtract(2, 'month');
        const prospectiveDateLimit = moment().add(2, 'month');

        if (dateEffetAffiliation.isAfter(retroactiveDateLimit)) {
          retroactiveDateLimit = dateEffetAffiliation;
          if (dateEffetAffiliation.isAfter(selectedDate)) {
            return { 'lessThanTheEffectDate': true };
          }
        }

        if (retroactiveDateLimit.isAfter(selectedDate)) {
          return { 'lessThanTheCurrentDate': true };
        }

        if (prospectiveDateLimit.isBefore(selectedDate)) {
          return { 'greaterThanTheCurrentDate': true };
        }

        if (dateProchaineEcheance && dateProchaineEcheance.isBefore(selectedDate)) {
          return { 'greaterThanTheTermDate': true };
        }

        return null;
      }
    };
  }

  static validateForOuvrantDroit(dateEffetAffiliation: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const dateRadiation = moment(control.value, 'DD/MM/YYYY', true);

      if (!dateRadiation.isValid()) {
        return { notValid: { value: control.value } };
      }

      const today = moment();
      const dateAffil = moment(dateEffetAffiliation, 'DD/MM/YYYY', true);

      if (dateRadiation.isAfter(today)) {
        return { notInRange: { value: control.value } };
      }

      if (dateAffil.isAfter(today) || dateAffil.isAfter(dateRadiation)) {
        return { lessThanTheEffectDate: { value: control.value } };
      }

      const sixMonthsAgo = moment(today).add(-6, 'M');

      const comparingDate = dateAffil.isAfter(sixMonthsAgo)
        ? dateAffil
        : sixMonthsAgo;

      if (!dateRadiation.isBetween(comparingDate, today, undefined, '[]')) {
        return { notInRange: { value: control.value } };
      }
    };
  }
}
