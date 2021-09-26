import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { BlasaCarUser } from '../../models/blasa-car-user';
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
  user: BlasaCarUser;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }


}
