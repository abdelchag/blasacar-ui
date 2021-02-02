import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apporteur-access-warning-dialog',
  templateUrl: './apporteur-access-warning-dialog.component.html',
  styles: []
})
export class ApporteurAccessWarningDialogComponent {

  constructor(public activeModal: NgbActiveModal) { }

  close() {
    this.activeModal.close();
  }

}
