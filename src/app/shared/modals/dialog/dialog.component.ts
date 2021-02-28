import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { typeDialog } from 'src/app/constants';

@Component({
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {

  @Input() typeDialog: string;
  @Input() messageDialog: string;

  isError: boolean;
  isSuccess: boolean;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.isError = this.typeDialog === typeDialog.ERROR;
    this.isSuccess = this.typeDialog === typeDialog.SUCCESS;
  }

  close(): void {
    this.activeModal.close();
  }

}
