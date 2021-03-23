import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blasacar-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelListComponent implements OnInit {
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
