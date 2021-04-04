import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import { NotificationType } from 'src/app/constants';
import { ToastNotificationService } from 'src/app/core/services';
import {Travel} from '../model/travel.model';
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

  save(travel): void {

    this.subscription.add(
      this.travelService.editTravel(travel)
        .subscribe(travels => {
          window.location.reload();
        },
        error => {
          this.toastNotificationService.notifyHttpError(error);
          },
        )
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
