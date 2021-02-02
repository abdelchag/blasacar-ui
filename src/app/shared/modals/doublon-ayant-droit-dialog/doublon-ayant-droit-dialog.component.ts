import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doublon-ayant-droit-dialog',
  templateUrl: './doublon-ayant-droit-dialog.component.html',
  styles: []
})
export class DoublonAyantDroitDialogComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }
}
