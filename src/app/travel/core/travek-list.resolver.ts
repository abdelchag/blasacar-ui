import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';


@Injectable()
export class TravelListResolver implements Resolve<Travel[]> {

  constructor(
    private travelService: TravelService,

  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Travel[]> {
    return this.travelService.getTravels();
  }
}
