import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { StringUtils } from 'src/utils/string-utils';
import { ActionCodeEnum, ACTION_CONNEXION_LIST, ConnexionAction } from '../../models/connexion-action';

@Component({
  selector: 'blasacar-connexion-popup',
  templateUrl: './connexion-popup.component.html',
  styleUrls: ['./connexion-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnexionPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConnexionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public action: ConnexionAction,
    private socialAuthService: SocialAuthService) { }

    
  ngOnInit(): void {
  }

  public launchFacebookAction(): void {
    switch (this.action.actionCode) {
      case ActionCodeEnum.CONNEXION:
        this.facebookConnexion();
        break;
      case ActionCodeEnum.INSCRIPTION:
        this.facebookInscription();
        break;
    }
  }

  public launchEmailAction(): void {
    switch (this.action.actionCode) {
      case ActionCodeEnum.CONNEXION:
      case ActionCodeEnum.INSCRIPTION:
    }
  }

  public switchAction(): void{
    this.action = ACTION_CONNEXION_LIST.find(a => StringUtils.equals(a.actionCode.toString(), this.action.switchAction.toString()));
  }

  private facebookConnexion(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      this.socialAuthService.signOut();
      console.log("Appelle service auth : ", JSON.stringify(user));
    });
  }

  private facebookInscription(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      this.socialAuthService.signOut();
      console.log("Appelle service inscrip : ", JSON.stringify(user));
    });
  }

}
