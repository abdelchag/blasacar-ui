import { Component, EventEmitter, Output } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'blasacar-modal',
  template: ''
})
export class ModalComponent {

  modalReference: NgbModalRef;
  @Output() notifyParent = new EventEmitter<any>();

  constructor(private ngModal: NgbModal) {
    this.ngModal = ngModal;
  }

  open(content: any): NgbModalRef {
    this.modalReference = this.ngModal.open(content, {
      backdrop: 'static',
      keyboard: false,
      centered: true
    });

    if (this.modalReference.componentInstance) {
      if (this.modalReference.componentInstance.notifyParent) {
        this.modalReference.componentInstance.notifyParent.subscribe((isEmitting: any) => {
          if (isEmitting) {
            this.notifyParent.emit(isEmitting);
          }
        });
      }
      if (this.modalReference.componentInstance.sendClose) {
        this.modalReference.componentInstance.sendClose.subscribe((isClosing: any) => {
          if (isClosing) {
            this.close();
          }
        });
      }
    }
    return this.modalReference;
  }

  close(): void {
    this.modalReference.close();
  }

}
