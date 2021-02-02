import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-message-splash-screen-dialog',
  templateUrl: './message-splash-screen-dialog.component.html',
  styles : []
})
export class MessageSplashScreenDialogComponent {

  @Input() message: string;
  @Input() title: string;
  @Input() icon: string;

  constructor(public activeModal: NgbActiveModal) { }

  close() {
    this.activeModal.close();
  }
}
