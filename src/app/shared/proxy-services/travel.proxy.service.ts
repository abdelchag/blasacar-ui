import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from 'src/app/travel/model/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelProxyService {

  TRAVEL_URL = '/api/travel';

  constructor(private readonly http: HttpClient) {
  }

  public createTravel(travel: Travel): Observable<Travel> {
    return this.http.post<Travel>(`${this.TRAVEL_URL}`, travel);
  }

  public getTravels() {
    return this.http.get<Travel[]>(`${this.TRAVEL_URL}/getall`);
  }

}
