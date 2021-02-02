import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { PersonneService } from 'src/app/core/services';
import { AdresseModel, PersonneModel } from 'src/app/shared/models';

@Component({
  selector: 'app-contact-apporteur-dialog',
  templateUrl: './contact-apporteur-dialog.component.html',
  styles: []
})
export class ContactApporteurDialogComponent implements OnInit, OnDestroy {

  apporteurs: PersonneModel[] = [];
  subscription: Subscription = new Subscription();
  isLoading = false;

  constructor(
    private activeModal: NgbActiveModal,
    private router: Router,
    private personneService: PersonneService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.subscription.add(
      this.personneService.getApporteurs()
        .pipe(finalize(() => this.isLoading = false))
        .subscribe(apporteurs => this.apporteurs = apporteurs));
  }

  getAdresse(adresses: AdresseModel[]): AdresseModel {
    return adresses.find(a => a.isAdressePrincipale);
  }

  close() {
    this.activeModal.close(true);
  }

  redirectToContactApporteur() {
    this.router.navigate(['/contact/contacteznous']);
    this.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
