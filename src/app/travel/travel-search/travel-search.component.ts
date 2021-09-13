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

  travelFilter: TravelFilter = new TravelFilter();
  travelFiltered: Travel[] = [];

  constructor(
    private readonly travelService: TravelService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.travelService.getTravels(this.travelFilter)
    .subscribe(travels => {
      this.travelFiltered = travels;
      this.changeDetector.detectChanges();
    });
  }

  search(): void {
    this.travelService.getTravels(this.travelFilter)
      .subscribe(travels => {
        this.travelFiltered = travels;
        this.changeDetector.detectChanges();
      });
  }

  onApplyFilter(travelFilter: TravelFilter) {

  }
  removeCollegeCriteria(college: string) {

  }

  removeEtatCriteria(etat: string) {

  }
  removeRisqueCriteria(college: string) {

  }

  removeAllCriteria() {

  }

  relance(id: string) {


  }

  sortBy(column: { name: string, asc: boolean }) {

  }

}
