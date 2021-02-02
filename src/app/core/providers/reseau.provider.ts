import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../ngrx-pattern/app-state';
import { UtilisateurService } from 'app/core/services';

import { LoadReseauSuccessAction } from '../ngrx-pattern/actions';

@Injectable()
export class ReseauProvider {

  constructor(
    private utilisateurService: UtilisateurService,
    private store: Store<AppState>
  ) { }

  load() {
    return new Promise((resolve, reject) => {
      this.utilisateurService.getReseau()
        .subscribe(response => {
          this.store.dispatch(new LoadReseauSuccessAction(response));
          resolve(true);
        });
    });
  }

}

export function reseauProviderFactory(provider: ReseauProvider) {
  return () => provider.load();
}
