import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { TravelFilter } from '../model/travel-filter';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';


@Injectable()
export class TravelDetailsResolver implements Resolve<Travel> {

  constructor(
    private travelService: TravelService,

  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Travel> {
    const idTravel = route.paramMap.get('idTravel');
    return this.travelService.getTravel(idTravel);
  }
}
