import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConnexionPopupComponent } from '../account/components/connexion-popup/connexion-popup.component';
import { ACTION_CONNEXION } from '../account/models/connexion-action';
import { CurrentUserService } from '../shared/services/current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

  modalRef: BsModalRef;

  constructor(
    private readonly currentUserService: CurrentUserService,
    private readonly modalService: BsModalService,
    private readonly router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.currentUserService.isUserConnected) {
      this.openConnexionPopup(route.url[0].path);
    }
    return this.currentUserService.isUserConnected;
  }

  openConnexionPopup(origineRoute: string): void {
    this.modalRef = this.modalService.show(
      ConnexionPopupComponent, {
      animated: true,
      initialState: {
        action: ACTION_CONNEXION,
        origin: origineRoute
      }
    }
    );

    this.modalRef.content.hideEvent
      .subscribe(onlyClose => {
        if (!onlyClose) {
          this.router.navigate([origineRoute]);
        }
      });
  }


}
