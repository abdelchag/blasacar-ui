import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './adresse-update-info-dialog.component.html'
})
export class AdresseUpdateInfoDialogComponent {

  @Output() navigate = new EventEmitter<string>();

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router
  ) { }

  redirectToDetailContratSante() {
    this.navigate.emit();
    this.close();
  }

  close() {
    this.activeModal.close(true);
  }

}
