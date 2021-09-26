import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelFilter } from 'src/app/travel/model/travel-filter';
import { Travel } from 'src/app/travel/model/travel.model';
import { DateUtils } from 'src/utils/date-utils';
import { StringUtils } from 'src/utils/string-utils';
import { HttpParamsBuilder } from './builder/http-params-builder';

@Injectable({
  providedIn: 'root'
})
export class TravelProxyService {

  TRAVEL_URL = '/api/travel';
  private readonly DATE_FORMAT = 'yyyy-MM-DD';

  constructor(private readonly http: HttpClient) {
  }

  public createTravel(travel: Travel): Observable<Travel> {
    return this.http.post<Travel>(`${this.TRAVEL_URL}`, travel);
  }

  public getTravels(travelFilter: TravelFilter): Observable<Travel[]> {
    const params: HttpParams = HttpParamsBuilder.builder()
      .appendIfNotNull('onlyUser', StringUtils.convertToString(travelFilter.onlyUser))
      .build();
    return this.http.get<Travel[]>(`${this.TRAVEL_URL}`, { params });
  }

  public getTravel(id: String): Observable<Travel> {
    return this.http.get<Travel>(`${this.TRAVEL_URL}/${id}`);
  }

  public search(travelFilter: TravelFilter): Observable<Travel[]> {
    const params: HttpParams = HttpParamsBuilder.builder()
      .appendIfNotNull('departureCity', travelFilter.departureCity)
      .appendIfNotNull('arrivalCity', travelFilter.arrivalCity)
      .appendIfNotNull('departureDate', DateUtils.transform(travelFilter.departureDate, this.DATE_FORMAT))
      .appendIfNotNull('departureTime', StringUtils.convertToString(travelFilter.departureTime))
      .appendIfNotNull('numberPlaces', StringUtils.convertToString(travelFilter.numberPlaces))
      .appendIfNotNull('isAutomaticAcceptance', StringUtils.convertToString(travelFilter.isAutomaticAcceptance))
      .appendIfNotNull('price', StringUtils.convertToString(travelFilter.price))
      .build();
    return this.http.get<Travel[]>(`${this.TRAVEL_URL}/search`, { params });
  }

  public deleteTravel(id: number): Observable<Travel> {
    return this.http.delete<Travel>(`${this.TRAVEL_URL}/${id}`);
  }
  public editTravel(travel: Travel): Observable<Travel> {
    return this.http.put<Travel>(`${this.TRAVEL_URL}`, travel);
  }

}
