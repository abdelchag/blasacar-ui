import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { CoordonneesBancairesModel } from 'src/app/shared/models';

@Injectable()
export class CompteBancaireListResolver
  implements Resolve<CoordonneesBancairesModel[]> {
  constructor() { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CoordonneesBancairesModel[]> {
    const numeroContrat = route.params['numeroContrat'];
    return null;
  }
}
