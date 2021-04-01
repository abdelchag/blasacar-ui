import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Travel} from '../model/travel.model';

@Component({
  selector: 'blasacar-travel-consult',
  templateUrl: './travel-consult.component.html',
  styleUrls: ['./travel-consult.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelConsultComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  travels: Travel[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    const travels$ = this.route.data
      .pipe(map((data: { travels: Travel[] }) => data.travels));

    this.subscription.add(
      travels$
        .subscribe(travels => {
          this.travels = travels;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteTravel(travel: Travel): void {
    this.travels.splice(this.travels.map(t => t.id).indexOf(travel.id), 1);
  }

}
