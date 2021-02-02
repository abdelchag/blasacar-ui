import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ayantDroitQualite, ayantDroitStatut } from 'app/constants';
import { Helpers } from 'app/helpers';
import { AdhesionTnsModel, AffiliationModel, AyantDroitModel, ContratModel, PersonneModel } from 'app/shared/models';
import { AdhesionModel } from 'app/shared/models/adhesion.model';

@Injectable()
export class AyantDroitStateProvider {

  affilie: PersonneModel;
  addingAyantDroitQualite: string;
  editingAyantDroit: AyantDroitModel;

  private ayantsDroit = new BehaviorSubject<AyantDroitModel[]>([]);
  get ayantsDroit$(): Observable<AyantDroitModel[]> {
    return this.ayantsDroit.asObservable();
  }

  conjoint$ = this.ayantsDroit$.pipe(map(ayantsDroit => ayantsDroit ? ayantsDroit.find(ayantDroit => ayantDroit.qualite === ayantDroitQualite.CONJOINT) : null));
  enfants$ = this.ayantsDroit$.pipe(map(ayantsDroit => ayantsDroit ? ayantsDroit.filter(ayantDroit => ayantDroit.qualite === ayantDroitQualite.ENFANT) : null));
  autres$ = this.ayantsDroit$.pipe(map(ayantsDroit => ayantsDroit ? ayantsDroit.filter(ayantDroit => ayantDroit.qualite === ayantDroitQualite.AUTRES) : null));
  hasDoublon$ = this.ayantsDroit$.pipe(map(ayantsDroit => ayantsDroit ? ayantsDroit.some(a => a.statut === ayantDroitStatut.DoublonEnAttenteCleva || a.statut === ayantDroitStatut.Doublon) : false));

  private adhesionTns = new BehaviorSubject<AdhesionTnsModel>(null);
  get adhesionTns$(): Observable<AdhesionTnsModel> {
    return this.adhesionTns.asObservable();
  }

  private adhesionAffilie = new BehaviorSubject<AdhesionModel>(null);
  get adhesionAffilie$(): Observable<AdhesionModel> {
    return this.adhesionAffilie.asObservable();
  }

  private affiliation = new BehaviorSubject<AffiliationModel>(null);
  get affiliation$(): Observable<AffiliationModel> {
    return this.affiliation.asObservable();
  }

  private contrat = new BehaviorSubject<ContratModel>(null);
  get contrat$(): Observable<ContratModel> {
    return this.contrat.asObservable();
  }

  hasOnlyOneAyantDroit$ = this.ayantsDroit$
    .pipe(
      map(ayantsDroit => this.getActiveAyantsDroit(ayantsDroit).length === 1)
    );

  hasNoAyantDroit$ = this.ayantsDroit$
    .pipe(
      map(ayantsDroit =>
        this.getActiveAyantsDroit(ayantsDroit).length === 0
        && !ayantsDroit.some(a =>
          a.statut === ayantDroitStatut.EnAttenteAjout
          || a.statut === ayantDroitStatut.DoublonEnAttenteCleva)));

  private refreshList: Subject<boolean> = new Subject<boolean>();
  refreshList$: Observable<boolean> = this.refreshList.asObservable();

  private getActiveAyantsDroit(ayantsDroit: AyantDroitModel[]): AyantDroitModel[] {
    const activeAyantsDroit: AyantDroitModel[] = [];

    if (ayantsDroit) {
      activeAyantsDroit.push(...ayantsDroit.filter(a =>
        ((a.statut === ayantDroitStatut.EstAjouteAuContrat || a.statut === ayantDroitStatut.EstAjouteAuContratSansPj)
          && !Helpers.hasAyantDroitDateRadiationValide(a))
        || Helpers.hasAyantDroitSortieDemandee(a)
      ));
    }

    return activeAyantsDroit;
  }

  notifyRefreshList(): void {
    this.refreshList.next(true);
  }

  setAyantsDroit(ayantsDroit: AyantDroitModel[]): void {
    this.ayantsDroit.next(ayantsDroit);
  }

  setContrat(contrat: ContratModel): void {
    this.contrat.next(contrat);
  }

  setAdhesionTns(adhesionTns: AdhesionTnsModel): void {
    this.adhesionTns.next(adhesionTns);
  }

  setAdhesionAffilie(adhesionAffilie: AdhesionModel): void {
    this.adhesionAffilie.next(adhesionAffilie);
  }
  setAffiliation(affiliation: AffiliationModel): void {
    this.affiliation.next(affiliation);
  }
}
