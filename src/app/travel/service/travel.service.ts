import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelProxyService } from 'src/app/shared/proxy-services/travel.proxy.service';
import { TravelFilter } from '../model/travel-filter';
import { Travel } from '../model/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private readonly travelProxyService: TravelProxyService) {
  }

  public proposeTravel(travel: Travel): Observable<Travel> {
    return this.travelProxyService.createTravel(travel);
  }

  public getTravels(travelFilter: TravelFilter): Observable<Travel[]> {
    return this.travelProxyService.getTravels(travelFilter);
  }

  public getTravel(id: String): Observable<Travel> {
    return this.travelProxyService.getTravel(id);
  }

  public reserve(id: String): Observable<Travel> {
    return this.travelProxyService.reserve(id);
  }

  public deleteTravel(travel: Travel): Observable<Travel> {
    return this.travelProxyService.deleteTravel(travel.id);
  }
  public editTravel(travel: Travel): Observable<Travel> {
    return this.travelProxyService.editTravel(travel);
  }

  public search(travel: TravelFilter): Observable<Travel[]> {
    return this.travelProxyService.search(travel);
  }

}
