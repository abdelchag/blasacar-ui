import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blasacar-travel-detail',
  templateUrl: './blasacar-travel-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelDetailComponent implements OnInit {
  extended = false;
  editing = false;
  constructor() { }

  ngOnInit(): void {
  }

  cancelEditing() {
    this.showDetail();
  }

  startEditing() {
    this.editing = true;
  }

  private showDetail() {
    this.editing = false;
  }

}
