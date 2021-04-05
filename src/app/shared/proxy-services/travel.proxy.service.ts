import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelFilter } from 'src/app/travel/model/travel-filter';
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

  public getTravels(travelFilter: TravelFilter): Observable<Travel[]> {
    const params = new HttpParams().set('onlyUser', String(travelFilter.onlyUser));
    return this.http.get<Travel[]>(`${this.TRAVEL_URL}`, { params });
  }

  public deleteTravel(id: number): Observable<Travel> {
    return this.http.delete<Travel>(`${this.TRAVEL_URL}/${id}`);
  }
  public editTravel(travel: Travel): Observable<Travel> {
    return this.http.put<Travel>(`${this.TRAVEL_URL}`, travel);
  }

}
