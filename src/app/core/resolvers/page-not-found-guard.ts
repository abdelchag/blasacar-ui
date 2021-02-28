import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { merge, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { profil } from 'src/app/constants';
import { ToastNotificationService, UtilisateurService } from 'src/app/core/services';
import { Helpers } from 'src/app/helpers';
import { ApporteurPositionModel, UtilisateurModel } from 'src/app/shared/models';


@Injectable()
export class PageNotFoundGuard implements CanActivate, OnDestroy {

  subscriptions: Subscription[] = [];
  isApporteur: boolean;
  profilTypeCode: string;
  utilisateur: UtilisateurModel;

  constructor(
    private router: Router,
    private toastNotificationService: ToastNotificationService,
    private utilisateurService: UtilisateurService
  ) {
    // let subscription = this.store.select(appState => appState.isApporteur)
    //   .subscribe(isApporteur => this.isApporteur = isApporteur);
    // this.subscriptions.push(subscription);

    // subscription = this.store.select(appState => appState.utilisateur)
    //   .subscribe(utilisateur => this.utilisateur = utilisateur);
    // this.subscriptions.push(subscription);

    // subscription = this.store.select(appState => appState.loadedProfilTypeCode)
    //   .subscribe(loadedProfilTypeCode => this.profilTypeCode = loadedProfilTypeCode);
    // this.subscriptions.push(subscription);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const profilCode = this.utilisateurService.profil.code.toLowerCase();
    const paths = route.url.map(urlSegment => urlSegment.path);

    const startsWithGrcId = paths[0]?.match(/\d{8}/);
    if (startsWithGrcId) {
      paths.shift();
    }

    const urlHasProfilCode = paths[0] === profilCode;
    if (urlHasProfilCode) {
      return true;
    } else {
      const commands = [profilCode, ...paths];
      this.router.navigate(commands, { queryParams: route.queryParams });
      return false;
    }

    // if (this.isApporteur) {
    //   this.redirectToProfile(profil.APPORTEUR, route);
    //   return of(false);
    // }

    // if (this.profilTypeCode) {
    //   this.redirectToProfile(this.profilTypeCode, route);
    //   return of(false);
    // }

    // return this.utilisateurService
    //   .getProfile()
    //   .pipe(
    //     tap(code => {
    //       if (Helpers.isAuthorizedProfile(code)) {
    //         this.redirectToProfile(code, route);
    //       } else {
    //         this.router.navigate(['/404']);
    //       }
    //     }),
    //     switchMap(() => of(false)),
    //     catchError(httpError => {
    //       this.toastNotificationService.notifyHttpError(httpError.error);
    //       this.router.navigate(['/indisponible']);
    //       return of(false);
    //     }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
