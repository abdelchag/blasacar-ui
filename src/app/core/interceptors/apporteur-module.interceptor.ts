import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AppState } from '../ngrx-pattern/app-state';
import { ApporteurPositionModel, UtilisateurModel } from 'app/shared/models';

@Injectable()
export class ApporteurModuleInterceptor implements HttpInterceptor, OnDestroy {

  isApporteur: boolean;
  utilisateur: UtilisateurModel;
  apporteurPosition: ApporteurPositionModel;
  subscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>) {
    let subscription = this.store.select(appState => appState.isApporteur).subscribe(isApporteur => this.isApporteur = isApporteur);
    this.subscriptions.push(subscription);

    subscription = this.store.select(appState => appState.utilisateur).subscribe(utilisateur => this.utilisateur = utilisateur);
    this.subscriptions.push(subscription);

    subscription = this.store.select(appState => appState.apporteurPosition)
      .subscribe(apporteurPosition => this.apporteurPosition = apporteurPosition);
    this.subscriptions.push(subscription);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.isApporteur) {
      return next.handle(req);
    }

    let apporteurReq = req.clone();

    if (this.utilisateur) {
      apporteurReq = apporteurReq.clone({
        setHeaders: {
          'Custom-Grc-Id': this.utilisateur.grcId,
          'Custom-Grc-Entite': this.utilisateur.entite
        }
      });
    }

    if (this.apporteurPosition) {
      apporteurReq = apporteurReq.clone({
        setHeaders: {
          'PositionGrc': this.apporteurPosition.apporteurPositionGrc,
          'IcxAgent': this.apporteurPosition.apporteurIcxAgent,
          'IcxAgence': this.apporteurPosition.apporteurIcxAgence
        }
      });
    }

    return next.handle(apporteurReq);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
