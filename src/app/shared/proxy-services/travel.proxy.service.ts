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
    /*const travel1 = new Travel();
    travel1.id = 1;
    travel1.departureCity = 'DepartureTest1';
    travel1.arrivalCity = 'ArrivalTest1';
    travel1.departureDate = new Date();
    travel1.departureTime = new Date();
    travel1.numberPlaces = 2;
    travel1.isAutomatiqueAcceptance = true;
    travel1.price = 20.5;
    travel1.phoneNumber = '0663372142';
    const travel2 = new Travel();
    travel2.id = 2;
    travel2.departureCity = 'DepartureTest2';
    travel2.arrivalCity = 'ArrivalTest2';
    travel2.departureDate = new Date();
    travel2.departureTime = new Date();
    travel2.numberPlaces = 2;
    travel2.isAutomatiqueAcceptance = true;
    travel2.price = 20.5;
    travel2.phoneNumber = '0663372180';
    return of([travel1, travel2]);*/
    const params = new HttpParams().set('onlyUser', String(travelFilter.onlyUser));
    return this.http.get<Travel[]>(`${this.TRAVEL_URL}`, { params });
  }

  public deleteTravel(id: number): Observable<Travel> {
    return this.http.delete<Travel>(`${this.TRAVEL_URL}/${id}`);
  }

}
