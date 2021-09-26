import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ConnexionAction } from '../../models/connexion-action';

@Component({
  selector: 'blasacar-mon-compte',
  templateUrl: './mon-compte.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonCompteComponent implements OnInit {

  hideEvent = new Subject<boolean>();
  canEdit= false;
  isContactEdited = false;
  isAdresseEdited = false;
  action: ConnexionAction;
  origin: string;

  constructor(
    private readonly modalRef: BsModalRef
  ) {
  }

  ngOnInit(): void {
  }

  closeModal(onlyClose: boolean = false): void {
    this.hideEvent.next(onlyClose);
    this.modalRef.hide();
  }

}
