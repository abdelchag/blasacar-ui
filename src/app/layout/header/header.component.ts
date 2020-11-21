import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnexionPopupComponent } from 'src/app/account/components/connexion-popup/connexion-popup.component';
import { FacebookService } from 'src/app/account/components/services/facebook.service';
import { BlasaCarUser } from 'src/app/account/models/blasa-car-user';
import { ACTION_CONNEXION, ACTION_INSCRIPTION } from 'src/app/account/models/connexion-action';
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

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly dialog: MatDialog,
    private readonly facebookService: FacebookService,
    private readonly currentUserService: CurrentUserService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.currentUserService.currentUser
    this.currentUserService.currentUserSubscription().subscribe(user => {
      this.currentUser = this.currentUserService.currentUser;
      this.isUserConnected = !Utils.isNullOrUndefined(this.currentUser);
      this.changeDetectorRef.detectChanges();
    })
  }

  inscription(): void {
    const connexionAction = ACTION_INSCRIPTION;
    this.dialog.open(ConnexionPopupComponent, {
      data: connexionAction
    });
  }

  connexion(): void {
    const connexionAction = ACTION_CONNEXION;
    this.dialog.open(ConnexionPopupComponent, {
      data: connexionAction
    });
  }

  deconnexion(): void {
    this.facebookService.facebookDeconnexion();
  }

}
