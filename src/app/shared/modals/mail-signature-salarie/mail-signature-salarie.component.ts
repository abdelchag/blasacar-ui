import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mail-signature-salarie-dialog',
  templateUrl: './mail-signature-salarie.component.html',
  styles: []
})

export class MailSignatureSalarieComponent implements OnInit {

  @Input() isSendingMailError: boolean;
  @Input() salarieGrcId: string;

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  close(action: string) {
    this.activeModal.close(action);
  }
  goToListSalarie() {
    this.router.navigate(['/salaries']);
    this.close(null);
  }

  goToProfilSalarie() {
    this.router.navigate(['/salaries', this.salarieGrcId]);
    this.close(null);
  }

}
