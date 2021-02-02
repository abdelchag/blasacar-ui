import { ValidatorFn, Validators } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  const phoneRegex = /^\+33\d{9}/;
  return Validators.pattern(phoneRegex);
}

export function mobilePhoneValidator(): ValidatorFn {
  const mobilePhoneRegex = /^\+33[6-7]\d{8}/;
  return Validators.pattern(mobilePhoneRegex);
}
