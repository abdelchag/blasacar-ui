import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { PersonneModel } from 'src/app/shared/models';

import { PersonneService } from '../services';

@Injectable()
export class PersonneConnecteeResolver implements Resolve<PersonneModel> {

  constructor(
    private personneService: PersonneService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PersonneModel> {
    return this.personneService.getPersonne();
  }
}
