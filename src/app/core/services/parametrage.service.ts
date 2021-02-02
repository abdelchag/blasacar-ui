import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import {
  CpVilleModel,
  LienUtileModel,
  ListItemModel,
  ParametrageEntiteModel,
  ParametrageModel,
  PaysModel
} from 'src/app/shared/models';

@Injectable()
export class ParametrageService {

  constructor(
    private httpClient: HttpClient
  ) { }

  searchCpVille(search: string): Observable<CpVilleModel[]> {
    const url = `${environment.apiUrl}/parametrages/rechercher-cp-ville`;

    const options = {
      params: {
        search: search
      }
    };

    return this.httpClient.get<CpVilleModel[]>(url, options);

  }

  getRegimes(): Observable<ListItemModel[]> {
    const url = `${environment.apiUrl}/parametrages/grandregime`;

    return this.httpClient.get<ListItemModel[]>(url);
  }

  getCaisses(grandRegime: string): Observable<ListItemModel[]> {
    const url = `${environment.apiUrl}/parametrages/caisse`;

    const options = {
      params: {
        grandRegime: grandRegime
      }
    };

    return this.httpClient.get<ListItemModel[]>(url, options);

  }

  getCentres(grandregime: string, caisse: string): Observable<ListItemModel[]> {
    const url = `${environment.apiUrl}/parametrages/centre`;

    const options = {
      params: {
        grandRegime: grandregime,
        caisse: caisse
      }
    };

    return this.httpClient.get<ListItemModel[]>(url, options);
  }

  getLiensUtiles(): Observable<LienUtileModel[]> {
    const url = `${environment.apiUrl}/parametrages/liens-utiles`;
    return this.httpClient.get<LienUtileModel[]>(url);
  }

  getParametrage() {
    const url = `${environment.apiUrl}/parametrages`;
    return this.httpClient.get<ParametrageModel>(url);
  }

  getParametrageEntite() {
    const url = `${environment.apiUrl}/parametrages/parametrage-entite`;
    return this.httpClient.get<ParametrageEntiteModel>(url);
  }

  getAllPays(): Observable<PaysModel[]> {
    const url = `${environment.apiUrl}/parametrages/get-all-pays`;
    return this.httpClient.get<PaysModel[]>(url);
  }

}
