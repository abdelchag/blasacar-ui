import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TravelFilter } from 'src/app/travel/model/travel-filter';
import { Travel } from 'src/app/travel/model/travel.model';
import { StringUtils } from 'src/utils/string-utils';
import { HttpParamsBuilder } from './builder/http-params-builder';

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
    // const travel: Travel = new Travel();
    // travel.departureCity = 'Lille';
    // travel.departureDate = new Date();
    // travel.arrivalCity = "Paris";
    // travel.numberPlaces = 2;
    // travel.phoneNumber = "0665788985";
    // travel.price = 20;
    // travel.isAutomaticAcceptance = false;
    // return of([travel]);
    const params: HttpParams = HttpParamsBuilder.builder()
      .appendIfNotNull('onlyUser', String(travelFilter.onlyUser || StringUtils.EMPTY))
      .build();
    return this.http.get<Travel[]>(`${this.TRAVEL_URL}`, { params });
  }

  public deleteTravel(id: number): Observable<Travel> {
    return this.http.delete<Travel>(`${this.TRAVEL_URL}/${id}`);
  }
  public editTravel(travel: Travel): Observable<Travel> {
    return this.http.put<Travel>(`${this.TRAVEL_URL}`, travel);
  }

}
