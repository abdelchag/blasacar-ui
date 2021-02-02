import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
})
export class BaseModalComponent {

  activeModal: NgbActiveModal;

  @Input() isLoading: boolean;
  @Output() notifyParent = new EventEmitter<any>();
  @Output() sendClose = new EventEmitter<boolean>();
  @Output() sendIsLoading = new EventEmitter<boolean>();

  validate() {
    this.notifyParent.emit(true);
  }

  close() {
    this.sendClose.emit(true);
  }

}
