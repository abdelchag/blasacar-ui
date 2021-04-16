import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TravelFilter } from '../model/travel-filter';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'blasacar-travel-search',
  templateUrl: './travel-search.component.html',
  styleUrls: ['./travel-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelSearchComponent implements OnInit {

  travelFilter: TravelFilter = {};
  travels: Travel[] = [];

  constructor(
    private readonly travelService: TravelService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    this.travelService.getTravels(this.travelFilter)
      .subscribe(travels => {
        this.travels = travels;
        this.changeDetector.detectChanges();
      });
  }

}
