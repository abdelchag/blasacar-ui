import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as moment from 'moment';
import { Travel } from '../model/travel.model';

@Component({
  selector: 'blasacar-travel-detail',
  templateUrl: './travel-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelDetailComponent implements OnInit {
  extended = false;
  editing = false;
  @Input() travel: Travel;
  constructor() { }

  get departureTime(): string {
    return moment(this.travel.departureTime).format('HH:mm');
  }

  get departureDate(): string {
    return moment(this.travel.departureDate).format('DD/MM/YYYY');
  }

  get creationDate(): string {
    return moment(this.travel.created).format('DD/MM/YYYY');
  }

  ngOnInit(): void {
  }

  cancelEditing(): void {
    this.showDetail();
  }

  startEditing(): void {
    this.editing = true;
  }

  private showDetail(): void {
    this.editing = false;
  }

}
