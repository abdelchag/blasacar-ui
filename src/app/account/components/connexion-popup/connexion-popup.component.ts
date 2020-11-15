import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { StringUtils } from 'src/utils/string-utils';
import { ActionCodeEnum, ACTION_CONNEXION_LIST, ConnexionAction } from '../../models/connexion-action';
import { FaceInfoSuppPopupComponent } from '../face-info-supp-popup/face-info-supp-popup.component';
import { FacebookService } from '../services/facebook.service';

@Component({
  selector: 'blasacar-connexion-popup',
  templateUrl: './connexion-popup.component.html',
  styleUrls: ['./connexion-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnexionPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConnexionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public action: ConnexionAction,
    private dialog: MatDialog,
    private readonly facebookService: FacebookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public launchFacebookAction(): void {
    switch (this.action.actionCode) {
      case ActionCodeEnum.CONNEXION:
        this.facebookService.facebookConnexion();
        break;
      case ActionCodeEnum.INSCRIPTION:
        this.facebookService.getFacebookUser().then(user => {
          this.openFaceInfoSupp(user);
        });
        break;
    }
    this.dialogRef.close();
  }

  public launchEmailAction(): void {
    switch (this.action.actionCode) {
      case ActionCodeEnum.CONNEXION:
        this.router.navigate(['/membre']);
      case ActionCodeEnum.INSCRIPTION:
    }
    this.dialogRef.close();
  }

  public switchAction(): void {
    this.action = ACTION_CONNEXION_LIST.find(a => StringUtils.equals(a.actionCode.toString(), this.action.switchAction.toString()));
  }

  private openFaceInfoSupp(socialUser: SocialUser): void {
    let dialogRef = this.dialog.open(FaceInfoSuppPopupComponent, {
      data: socialUser
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('FaceInfoSupp The dialog was closed');
    });
  }

}
