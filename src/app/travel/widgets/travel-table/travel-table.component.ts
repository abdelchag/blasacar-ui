import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Travel } from '../../model/travel.model';

@Component({
  selector: 'blasacar-travel-table',
  templateUrl: './travel-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelTableComponent implements OnInit {
  @Input() travels: Travel[] = [];
  @Output() relance = new EventEmitter<string>();
  @Output() sort = new EventEmitter<{ name: string, asc: boolean }>();

  page = 1;
  pageSize = 10;
  pageCount: number;
  selectedTravel: Travel;

  constructor() { }

  get paginatedTravels(): Travel[] {
    return this.travels
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  get firstPageItem() {
    return ((this.page - 1) * this.pageSize) + 1;
  }

  get lastPageItem() {
    return this.firstPageItem + this.paginatedTravels.length - 1;
  }

  toggle(travel: Travel) {
    if (travel === this.selectedTravel) {
      this.selectedTravel = null;
    } else {
      this.selectedTravel = travel;
    }
  }

  ngOnInit(): void {
  }
  next(): void {
  }

  previous(): void {
  }

  changePageSize(pageSize: string) {
    this.page = 1;
    this.pageSize = Number(pageSize);
  }

  getTravelStatutIcon(travel: Travel): string {
    return 'check-circle-fill';
  }

  getTravelStatutIconColor(travel: Travel): string {
    return 'text-success';
  }
}
