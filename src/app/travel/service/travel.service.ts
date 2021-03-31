import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelProxyService } from 'src/app/shared/proxy-services/travel.proxy.service';
import { Travel } from '../model/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private readonly travelProxyService: TravelProxyService) { }

  public proposeTravel(travel: Travel): Observable<Travel> {
    return this.travelProxyService.createTravel(travel);
  }

  public getTravels(): Observable<Travel[]> {
    return this.travelProxyService.getTravels();
  }

}
