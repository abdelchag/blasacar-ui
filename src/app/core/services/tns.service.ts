import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { PersonneModel } from 'src/app/shared/models';

@Injectable()
export class TnsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEntreprise(): Observable<PersonneModel[]> {
    const url = `${environment.apiUrl}/tns/entreprise`;
    return this.httpClient.get<PersonneModel[]>(url);
  }
}
