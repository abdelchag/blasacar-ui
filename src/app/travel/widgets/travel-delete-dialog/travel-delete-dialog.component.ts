import { Component,  ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Travel } from '../../model/travel.model';

@Component({
  selector: 'blasacar-travel-delete-dialog',
  templateUrl: './travel-delete-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelDeleteDialogComponent {

  form = new FormGroup({});
  isLoading = false;
  isProcessed = false;
  @Output() delete = new EventEmitter();

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  close() {
    this.activeModal.close();
  }

  radier() {
    this.delete.emit();
  }
}
