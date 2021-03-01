import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SocialUser} from 'angularx-social-login';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {StringUtils} from 'src/utils/string-utils';
import {ACTION_CONNEXION_LIST, ActionCodeEnum, ConnexionAction} from '../../models/connexion-action';
import {FaceInfoSuppPopupComponent} from '../face-info-supp-popup/face-info-supp-popup.component';
import {FacebookService} from '../services/facebook.service';

@Component({
  selector: 'blasacar-connexion-popup',
  templateUrl: './connexion-popup.component.html',
  styleUrls: ['./connexion-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnexionPopupComponent implements OnInit {

  action: ConnexionAction;

  constructor(
    private readonly modalRef: BsModalRef,
    private readonly modalService: BsModalService,
    private readonly facebookService: FacebookService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modalRef.hide();
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
    this.modalRef.hide();
  }

  public launchEmailAction(): void {
    switch (this.action.actionCode) {
      case ActionCodeEnum.CONNEXION:
        this.router.navigate(['/connexion-membre']);
        break;
      case ActionCodeEnum.INSCRIPTION:
        this.router.navigate(['/membre']);
        break;
    }
    this.modalRef.hide();
  }

  public switchAction(): void {
    this.action = ACTION_CONNEXION_LIST.find(a => StringUtils.equals(a.actionCode.toString(), this.action.switchAction.toString()));
  }

  private openFaceInfoSupp(socialUser: SocialUser): void {
    this.modalService.show(
      FaceInfoSuppPopupComponent, {
        animated: true,
        initialState: {
          user: {
            ...socialUser,
            birthDate: null,
            gender: null
          },
        }
      });
  }

}
