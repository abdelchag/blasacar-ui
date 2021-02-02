import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styles: []
})
export class InformationDialogComponent {
  @Input() message: any;
  constructor(public activeModal: NgbActiveModal) {
  }

  close() {
    this.activeModal.close();
  }

}
