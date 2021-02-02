import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { PersonneService } from '../services';

@Injectable()
export class PersonneHasTeletransmissionResolver implements Resolve<Boolean> {

  constructor(
    private personneService: PersonneService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Boolean> {
    return this.personneService.getTeletransmission();
  }
}
