import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AffiliationTnsModel } from 'src/app/shared/models';


@Injectable()
export class AffiliationDetailResolver implements Resolve<AffiliationTnsModel> {

  constructor(

  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AffiliationTnsModel> {
    return null;
  }
}
