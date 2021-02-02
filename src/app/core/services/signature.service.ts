import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { ParcoursModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class SignatureService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSignature(signatureId: number) {
    const url = `${environment.apiUrl}/signatures/${signatureId}`;
    return this.httpClient.get<ParcoursModel>(url);
  }

}
