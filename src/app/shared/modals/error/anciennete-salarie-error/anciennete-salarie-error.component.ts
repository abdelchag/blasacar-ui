import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-anciennete-salarie-error',
  templateUrl: './anciennete-salarie-error.component.html'
})
export class AncienneteSalarieErrorComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
    private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  goToListSalarie() {
    this.router.navigate(['/salaries']);
    this.close();
  }

}
