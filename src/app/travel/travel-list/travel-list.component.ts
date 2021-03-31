import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Travel } from '../model/travel.model';

@Component({
  selector: 'blasacar-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelListComponent implements OnInit {
  extended = false;
  editing = false;


  @Input() travel: Travel;


  constructor() { }

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
