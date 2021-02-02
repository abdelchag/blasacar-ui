import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { frenchDateToISO } from 'src/app/helpers';
import {
  AdresseModel,
  AdresseParameter,
  InfosContactUpdateModel,
  OrganismeRattachementModel,
  PersonneModel,
  PersonneSearchModel,
  RegimeObligatoireUpdateModel
} from 'src/app/shared/models';


@Injectable()
export class PersonneService {
  constructor(private httpClient: HttpClient) { }

  hasCompteBancaire(iban: string) {
    const url = `${environment.apiUrl}/personnes/comptes-bancaires/${iban}`;
    return this.httpClient.get<boolean>(url);
  }

  hasMandatCompteBancaire(compteBancaireId: number, isPersonneMorale: boolean) {
    const url = `${environment.apiUrl}/personnes/comptes-bancaires/${compteBancaireId}/mandat`;
    const options = {
      params: { isPersonneMorale: isPersonneMorale.toString() }
    };

    return this.httpClient.get<boolean>(url, options);
  }

  getPersonne(): Observable<PersonneModel> {
    const url = `${environment.apiUrl}/personnes/personne-connectee`;
    return this.httpClient.get<PersonneModel>(url);
  }

  getTeletransmission(): Observable<boolean> {
    const url = `${environment.apiUrl}/personnes/teletransmission`;

    return this.httpClient.get<boolean>(url);
  }


  setTeletransmission(hasTeletransmission: boolean) {
    const url = `${environment.apiUrl}/personnes/teletransmission`;
    return this.httpClient.put(url, { hasTeletransmission });
  }

  getTeletransmissionByGrcId(grcId: string): Observable<boolean> {
    const url = `${environment.apiUrl}/personnes/${grcId}/teletransmission`;

    return this.httpClient.get<boolean>(url);
  }

  search(search: PersonneSearchModel) {

    search.dateNaissance = frenchDateToISO(search.dateNaissance);

    const url = `${environment.apiUrl}/personnes/search`;
    const options = {
      params: new HttpParams({ fromObject: search as any })
    };

    return this.httpClient.get<PersonneModel>(url, options);
  }

  setTeletransmissionByGrcId(grcId: string, hasTeletransmission: boolean) {
    const url = `${environment.apiUrl}/personnes/teletransmission`;

    return this.httpClient.put(url, { grcId, hasTeletransmission });
  }

  updateAdresses(adresses: AdresseModel[]) {
    const url = `${environment.apiUrl}/personnes/adresses`;

    return this.httpClient.put<AdresseModel[]>(url, adresses);
  }

  updateAdressesBygrcId(adresseParameter: AdresseParameter) {
    const url = `${environment.apiUrl}/personnes/adresses-by-grcid`;

    return this.httpClient.put<AdresseModel[]>(url, adresseParameter);
  }

  updateOrganismeRattachement(regimeObligatoireUpdate: RegimeObligatoireUpdateModel) {
    const url = `${environment.apiUrl}/personnes/organisme-rattachement`;

    return this.httpClient.put<OrganismeRattachementModel>(
      url,
      regimeObligatoireUpdate
    );
  }

  updateOrganismeRattachementSalarie(regimeObligatoireUpdate: RegimeObligatoireUpdateModel) {
    const url = `${environment.apiUrl}/salarie/personnes/organisme-rattachement`;

    return this.httpClient.put<OrganismeRattachementModel>(
      url,
      regimeObligatoireUpdate
    );
  }

  getApporteurs(): Observable<PersonneModel[]> {
    const url = `${environment.apiUrl}/personnes/apporteurs`;

    return this.httpClient.get<PersonneModel[]>(url);
  }

  getPersonneByGrcId(grcId: string): Observable<PersonneModel> {
    const url = `${environment.apiUrl}/personnes/${grcId}/personne-by-grcid`;

    return this.httpClient.get<PersonneModel>(url);
  }
}
