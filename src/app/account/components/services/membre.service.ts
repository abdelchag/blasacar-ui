import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExternalUserResponse } from '../../models/blasa-car-user';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(
    private httpClient: HttpClient
  ) { }

  saveMembre(user: UserModel): Observable<ExternalUserResponse> {
    const url = `${environment.apiUrl}/User/register`;
    return this.httpClient.post<ExternalUserResponse>(url, user);
  }
}
