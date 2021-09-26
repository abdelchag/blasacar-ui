import { Component,  ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Travel } from '../../model/travel.model';
import { TravelService } from '../../service/travel.service';

@Component({
  selector: 'reserve-confirm-dialog',
  templateUrl: './reserve-confirm-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReserveConfirmDialogComponent {

  isFormLoading = false;
  @Input() idTravel: String;

  constructor(
    private readonly travelService: TravelService,
    private activeModal: NgbActiveModal
  ) { }

  close() {
    this.activeModal.close(false);
  }

  validate() {
    this.isFormLoading = true;

    this.travelService
    .reserve(this.idTravel)
    .subscribe(
      () => {
        this.isFormLoading = false;
        this.activeModal.close({ statut: true });
      },
      () => this.activeModal.close({ statut: false })
    );
    
  }
}
