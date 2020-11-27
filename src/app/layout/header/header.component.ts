import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConnexionPopupComponent } from 'src/app/account/components/connexion-popup/connexion-popup.component';
import { FacebookService } from 'src/app/account/components/services/facebook.service';
import { BlasaCarUser } from 'src/app/account/models/blasa-car-user';
import { ACTION_CONNEXION, ACTION_INSCRIPTION, ConnexionAction } from 'src/app/account/models/connexion-action';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { Utils } from 'src/utils/utils';

@Component({
  selector: 'blasacar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  currentUser: BlasaCarUser;
  isUserConnected: boolean;
  action: ConnexionAction;
  action_inscription = ACTION_INSCRIPTION;
  action_connexion = ACTION_CONNEXION;

  modalRef: BsModalRef;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly modalService: BsModalService,
    private readonly facebookService: FacebookService,
    private readonly currentUserService: CurrentUserService
  ) { }

  ngOnInit(): void {
    this.currentUserService.currentUserSubscription().subscribe(user => {
      this.currentUser = user;
      this.isUserConnected = this.currentUserService.isUserConnected;
      this.changeDetectorRef.detectChanges();
    });
    this.currentUserService.performCurrentUser();
  }

  openConnexionPopup(connexionAction: ConnexionAction): void {
    this.action = connexionAction;
    this.modalRef = this.modalService.show(
      ConnexionPopupComponent, {initialState: {
        action: connexionAction
      }}
    );
  }

  deconnexion(): void {
    this.facebookService.facebookDeconnexion();
  }

}
