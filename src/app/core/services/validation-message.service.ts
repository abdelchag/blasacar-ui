import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class ValidationMessageService {

  private showMessages: Subject<boolean> = new Subject<boolean>();
  showMessages$: Observable<boolean> = this.showMessages.asObservable();

  notifyShowMessage(value: boolean): void {
    this.showMessages.next(value);
  }

  getValidationMessages(control: AbstractControl, validationMessages: any): string | undefined {
    if ((control.touched || control.dirty) && control.errors) {
      return Object.keys(control.errors).map(key => validationMessages[key]).find(x => x);
    }
  }
}
