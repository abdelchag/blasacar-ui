import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Travel } from '../../model/travel.model';

@Component({
  selector: 'blasacar-travel-detail',
  templateUrl: './travel-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelDetailComponent implements OnInit {
  extended = false;
  editing = false;
  @Input() travel: Travel;
  @Input() fromSearch: false;
  constructor() { }

  ngOnInit(): void {
    this.extended = this.fromSearch;
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
