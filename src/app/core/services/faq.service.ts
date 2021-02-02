import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


import { FaqGroupeModel, FaqMailModel, FaqModel, FaqObjetModel, ListItemModel } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class FaqService {

  constructor(
    private httpClient: HttpClient
  ) { }

  sendFaqMail(mailMessage: FaqMailModel) {
    const url = `${environment.apiUrl}/faqs/faq-mail`;
    return this.httpClient.post(url, mailMessage, { responseType: 'text' });
  }

  getFaqsByProfil(profilTypeCode: string): Observable<FaqModel[]> {
    const url = `${environment.apiUrl}/faqs/profils/${profilTypeCode}`;

    return this.httpClient.get<FaqModel[]>(url);
  }

  getFaqMailObjetModels(hasContratSante: string): Observable<FaqObjetModel[]> {
    const url = `${environment.apiUrl}/faqs/mail-objets`;
    return this.httpClient.get<FaqObjetModel[]>(url);
  }

  getFaqGroupe(profilTypeCode: string): Observable<FaqGroupeModel[]> {
    const url = `${environment.apiUrl}/faqs/faqgroupes/${profilTypeCode}`;

    return this.httpClient.get<FaqGroupeModel[]>(url);
  }

  getGrandRegime(): Observable<ListItemModel[]> {
    const url = `${environment.apiUrl}/parametrages/grandregime`;

    return this.httpClient.get<ListItemModel[]>(url);
  }
}
