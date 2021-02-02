import { AbstractControl, ValidationErrors } from '@angular/forms';

const SEPA_COUNTRY_CODE_LENGTHS = {
  AT: 20, BE: 16, BG: 22, CH: 21, CY: 28, CZ: 24, DE: 22, DK: 18, EE: 20, ES: 24,
  FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, HR: 21, HU: 28, IE: 22,
  IS: 26, IT: 27, LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MT: 31, NL: 18, NO: 15,
  PL: 28, PT: 25, RO: 24, SE: 24, SI: 19, SK: 24, SM: 27
};

function isValid(iban: string): boolean {

  const arrangedIban = iban.substr(4) + iban.substr(0, 4);
  const numberedIban = arrangedIban
    .toUpperCase()
    .replace(/[A-Z]/g, letter => `${letter.charCodeAt(0) - 55}`);

  let remainder = numberedIban;

  while (remainder.length > 2) {
    const block = remainder.slice(0, 9);
    remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
  }

  const modulo = parseInt(remainder, 10) % 97;

  return modulo === 1;
}

export class IbanValidator {

  static validate(control: AbstractControl): ValidationErrors | null {
    const iban: string = control.value;

    if (!iban) {
      return null;
    }

    const pattern = /^([A-Z]{2})[0-9]{2}[A-Z0-9]{10,30}$/;

    const matched = iban.match(pattern);
    if (!matched) {
      return { 'pattern': true };
    }

    const countryCode = matched[1];
    const countryCodeLength = SEPA_COUNTRY_CODE_LENGTHS[countryCode];

    if (!countryCodeLength) {
      return { 'country': true };
    }

    if (iban.length !== countryCodeLength) {
      return { 'pattern': true };
    }

    if (!isValid(iban)) {
      return { 'pattern': true };
    }

    return null;

  }

}
