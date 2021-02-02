import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ageAndCumulRetraite-salarie-error',
  templateUrl: './ageAndCumulRetraite-salarie-error.component.html',
  styles: []
})
export class AgeAndCumulRetraiteSalarieErrorComponent implements OnInit {

  @Input() numeroContrat: string;
  @Input() salarieGrcId: string;

  constructor(
    private router: Router,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  goToListSalarie() {
    this.activeModal.close();
    if (this.salarieGrcId) {
      this.router.navigate(['/salaries', this.salarieGrcId]);

    } else {
      this.router.navigate(['/salaries']);
    }
  }

  goToFAQ(): void {
    this.close();
    this.router.navigate(
      ['/contact/contacteznous'],
      {
        queryParams: {
          objet: 'AJOUTER_OD_PREVOYANCE_PLUS_70_ANS',
          numeroContrat: this.numeroContrat
        }
      });
  }

}
