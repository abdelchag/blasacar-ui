import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { PersonneModel } from 'src/app/shared/models';

import { TnsService } from '../services';

@Injectable()
export class PersonneAsTnsResolver implements Resolve<PersonneModel[]> {

  constructor(
    private tnsService: TnsService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PersonneModel[]> {
    return this.tnsService.getEntreprise();
  }
}
