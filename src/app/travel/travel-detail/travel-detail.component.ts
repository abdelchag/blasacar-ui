import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blasacar-travel-detail',
  templateUrl: './travel-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelDetailComponent implements OnInit {
  extended = false;
  editing = false;
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
