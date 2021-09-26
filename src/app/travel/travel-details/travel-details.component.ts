import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/constants';
import { ToastNotificationService } from 'src/app/core/services';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'blasacar-travel-details',
  templateUrl: './travel-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  travel: Travel;
  editing = false;
  idTravel: String;

  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private readonly travelService: TravelService,
    private toastNotificationService: ToastNotificationService,
  ) {
  }

  ngOnInit(): void {

    const travel$ = this.route.data
      .pipe(map((data: { travels: Travel }) => data.travels));

    this.subscription.add(
      travel$
        .subscribe(travel => {
          this.travel = travel;
        })
    );

    
  }


  ngOnDestroy(): void {
    
  }



}
