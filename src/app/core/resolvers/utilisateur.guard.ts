import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { first, map, merge } from 'rxjs/operators';



@Injectable()
export class UtilisateurGuard implements CanActivate {

  constructor(
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return null;

  }

}
