import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
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

  hideEvent = new Subject<boolean>();

  action: ConnexionAction;
  origin: string;

  constructor(
    private readonly modalRef: BsModalRef,
    private readonly modalService: BsModalService,
    private readonly facebookService: FacebookService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
  }

  closeModal(onlyClose: boolean = false): void {
    this.hideEvent.next(onlyClose);
    this.modalRef.hide();
  }

  public launchFacebookAction(): void {
    switch (this.action.actionCode) {
      case ActionCodeEnum.CONNEXION:
        this.facebookService.facebookConnexion()
          .subscribe(() => this.closeModal());
        break;
      case ActionCodeEnum.INSCRIPTION:
        this.facebookService.getFacebookUser().subscribe(user => {
          this.openFaceInfoSupp(user);
          this.closeModal();
        });
        break;
    }
  }

  public launchEmailAction(): void {
    switch (this.action.actionCode) {
      case ActionCodeEnum.CONNEXION:
        this.router.navigate(['/connexion-membre'],
          {
            queryParams: {
              origin: this.origin
            }
          });
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
