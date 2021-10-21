import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Helpers } from 'src/app/helpers';
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
  form = new FormGroup({});

  constructor(
    private readonly travelService: TravelService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    this.travelService.getTravels(this.travelFilter)
      .subscribe(travels => {
        this.travelFiltered = travels;
        this.changeDetector.detectChanges();
      });
  }

  onApplyFilter() {

    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }
    


    this.travelService.search(this.travelFilter)
      .subscribe(travels => {
        this.travelFiltered = travels;
        this.changeDetector.detectChanges();
      });
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
