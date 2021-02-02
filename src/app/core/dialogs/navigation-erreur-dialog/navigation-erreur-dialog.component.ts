import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation-erreur-dialog',
  templateUrl: './navigation-erreur-dialog.component.html',
  styles: []
})
export class NavigationErreurDialogComponent {

  @Input() message: string;

  constructor(public activeModal: NgbActiveModal) { }

  close() {
    this.activeModal.close();
  }
}
