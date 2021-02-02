import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';


import { UtilisateurService } from '../services';

@Injectable()
export class CanActivateProfil implements CanActivate {

  constructor(
    private utilisateurService: UtilisateurService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    const startsWithGrcId = state.url.match(/^\/(\d{8})/);
    const grcId = startsWithGrcId?.[1];

    return this.utilisateurService.profil
      ? of(true)
      : this.utilisateurService
        .getProfil(grcId)
        .pipe(
          tap(profil => {


            

          }),
          mapTo(true)
        );

  }


}
