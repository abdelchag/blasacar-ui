import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(
    private httpClient: HttpClient
  ) { }

  saveMembre(user: UserModel) {
    const url = `${environment.apiUrl}/UserEmail/register`;
    return this.httpClient.post(url, user);
  }
}
