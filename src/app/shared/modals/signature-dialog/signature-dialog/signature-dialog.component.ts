import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SignatureDialogOptions } from '../signature-dialog-options';
import { SignatureDialogResults } from '../signature-dialog-results';
import { SignatureDialogStates } from '../signature-dialog-states';

@Component({
  templateUrl: './signature-dialog.component.html'
})
export class SignatureDialogComponent {

  @Input() state = SignatureDialogStates.NONE;
  @Input() options: SignatureDialogOptions;
  @Output() openTab = new EventEmitter();
  @Output() closeDialog = new EventEmitter<SignatureDialogResults>();

  states = SignatureDialogStates;
  help = false;

  error() {
    this.closeDialog.emit(SignatureDialogResults.ERROR);
  }

  success() {
    this.closeDialog.emit(SignatureDialogResults.SUCCESS);
  }

  toggleHelp() {
    this.help = !this.help;
  }

}
