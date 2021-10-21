import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { ProfilModel, UtilisateurModel } from 'src/app/shared/models';
import { ReseauModel } from 'src/app/shared/models/reseau.model';
import { UserModel } from 'src/app/account/models/user.model';

@Injectable()
export class UtilisateurService {

  profil: ProfilModel;

  constructor(
    private httpClient: HttpClient
  ) { }

  ACCOUNT_MANAGEMENT_URL = '/api/access-management';

  getById(userId: string): Observable<UserModel> {
    const url = `${this.ACCOUNT_MANAGEMENT_URL}/User/get-by-id/${userId}`;
    return this.httpClient.get<UserModel>(url);
  }

  get(): Observable<UtilisateurModel> {
    const url = `${environment.apiUrl}/utilisateurs`;
    return this.httpClient.get<UtilisateurModel>(url);
  }

  getReseau(): Observable<ReseauModel> {
    const url = `${environment.apiUrl}/utilisateurs/reseau`;
    return this.httpClient.get<ReseauModel>(url);
  }

  getByIdGrc(grcId: string): Observable<UtilisateurModel> {
    const url = `${environment.apiUrl}/utilisateurs/${grcId}`;
    return this.httpClient.get<UtilisateurModel>(url);
  }

  getProfile(): Observable<string> {
    const url = `${environment.apiUrl}/utilisateurs/profilTypeCode`;

    return this.httpClient.get(url, { responseType: 'text' });
  }

  getProfil(grcId?: string): Observable<ProfilModel> {
    const url = `${environment.apiUrl}/utilisateurs/profil`;
    const options = grcId
      ? { params: { clientGrcId: grcId } }
      : {};

    return this.httpClient
      .get<ProfilModel>(url, options)
      .pipe(
        tap(profil => {
          this.profil = profil;
        })
      );
  }

  getWebToken(codeGrc: string): Observable<string> {
    const url = `${environment.apiUrl}/utilisateurs/webToken/${codeGrc}`;

    return this.httpClient.get(url, { responseType: 'text' });
  }

  getEntiteCode(): Observable<string> {
    const url = `${environment.apiUrl}/utilisateurs/entite`;

    return this.httpClient.get(url, { responseType: 'text' });
  }

  // logout(isApporteur: boolean) {
  //   if (isApporteur) {
  //     window.location.href = environment.urls.logout.apporteur;
  //   } else {
  //     window.location.href = environment.urls.logout.client;
  //   }
  // }
}
