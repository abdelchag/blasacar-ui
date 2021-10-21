import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DriverProvider } from 'protractor/built/driverProviders';
import { UserModel } from 'src/app/account/models/user.model';
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
  @Input() driver: UserModel;
  @Input() fromSearch = false;
  constructor() { }

  get getLastFirtNameDriver() {
    return this.driver.lastName + " " + this.driver.firstName;
  }

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
