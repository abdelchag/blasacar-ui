import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { ContratModel } from 'src/app/shared/models';

@Injectable()
export class SidebarStateService {

  contratModel: ContratModel;

  private _currentContrat = new Subject<ContratModel>();

  get currentContrat$(): Observable<ContratModel> {
    return this._currentContrat.asObservable();
  }

  setCurrentContrat(currentContrat: ContratModel): void {
    this.contratModel = currentContrat;
    this._currentContrat.next(currentContrat);

  }
}
