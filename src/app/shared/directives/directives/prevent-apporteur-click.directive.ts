import { Directive, HostListener, OnDestroy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { ApporteurAccessWarningDialogComponent } from 'src/app/shared/modals';

@Directive({
  selector: '[appPreventApporteurClick]'
})
export class PreventApporteurClickDirective implements OnDestroy {


  isApporteur: boolean;
  subscription: Subscription;
  constructor(
    private modalService: NgbModal) {
    }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.isApporteur) {
      this.modalService.open(ApporteurAccessWarningDialogComponent);
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
