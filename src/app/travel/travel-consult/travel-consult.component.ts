import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationType } from 'src/app/constants';
import { ToastNotificationService } from 'src/app/core/services';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'blasacar-travel-consult',
  templateUrl: './travel-consult.component.html',
  styleUrls: ['./travel-consult.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelConsultComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  travels: Travel[] = [];
  editing = false;

  constructor(
    private route: ActivatedRoute,
    private readonly travelService: TravelService,
    private toastNotificationService: ToastNotificationService,
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
// TODO mettre dans travel-edit comme delete
  save(travel): void {

    const index = this.travels.map(t => t.id).indexOf(travel.id);
    this.travels[index] = travel;

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteTravel(travel: Travel): void {
    this.travels.splice(this.travels.map(t => t.id).indexOf(travel.id), 1);
  }

}
