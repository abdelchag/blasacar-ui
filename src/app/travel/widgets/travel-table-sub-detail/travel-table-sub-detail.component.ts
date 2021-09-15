import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Travel } from '../../model/travel.model';

export class DoActionModel {
  action: string;
  salarieGrcId: string;
}

@Component({
  selector: 'blasacar-travel-table-sub-detail',
  templateUrl: './travel-table-sub-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TravelTableSubDetailComponent implements OnInit {

  @Input() travel: Travel;
  @Output() doAction: EventEmitter<DoActionModel> = new EventEmitter<DoActionModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
