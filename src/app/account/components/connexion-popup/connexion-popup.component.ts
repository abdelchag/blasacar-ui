import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { StringUtils } from 'src/utils/string-utils';
import { ActionCodeEnum, ACTION_CONNEXION_LIST, ConnexionAction } from '../../models/connexion-action';
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
        this.facebookService.facebookInscription();
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

  public switchAction(): void{
    this.action = ACTION_CONNEXION_LIST.find(a => StringUtils.equals(a.actionCode.toString(), this.action.switchAction.toString()));
  }

}
