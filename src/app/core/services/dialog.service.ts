import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { typeDialog } from 'src/app/constants';
import { DialogComponent } from 'src/app/shared/modals/dialog/dialog.component';


@Injectable()
export class DialogService {

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) { }

  openDialogSuccess(messageDialog: string, routepath: string, route: ActivatedRoute) {
    const modalReference = this.modalService.open(DialogComponent, { centered: true, backdrop: 'static' });
    modalReference.componentInstance.typeDialog = typeDialog.SUCCESS;
    modalReference.componentInstance.messageDialog = messageDialog;
    modalReference.result.then(() => {
      if (route !== undefined) {
        this.router.navigate([routepath], { relativeTo: route });
      } else {
        this.router.navigate([routepath]);
      }
    });
  }


  openDialogError() {
    const modalReference = this.modalService.open(DialogComponent, { centered: true, backdrop: 'static' });
    modalReference.componentInstance.typeDialog = typeDialog.ERROR;
    modalReference.componentInstance.messageDialog = 'Votre demande n\'a pas pu être traitée. Veuillez réessayer ultérieurement.';
    modalReference.result.then(() => {
    });
  }
}
