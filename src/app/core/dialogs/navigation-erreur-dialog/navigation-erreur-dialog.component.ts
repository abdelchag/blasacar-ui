import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'blasacar-navigation-erreur-dialog',
  templateUrl: './navigation-erreur-dialog.component.html',
  styles: []
})
export class NavigationErreurDialogComponent {

  @Input() message: string;

  constructor(public activeModal: NgbActiveModal) { }

  close(): void {
    this.activeModal.close();
  }
}
