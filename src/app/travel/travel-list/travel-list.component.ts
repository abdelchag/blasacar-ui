import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'blasacar-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelListComponent implements OnInit {
  extended = false;

  @Input() editing: boolean;
  @Output() save = new EventEmitter<Travel>();

  @Input() travel: Travel;
  @Output()
  delete = new EventEmitter<Travel>();

  constructor(
    private readonly travelService: TravelService,
    private readonly translateService: TranslateService) {
  }

  ngOnInit(): void {

  }

  cancelEditing(): void {
    this.showDetail();
  }

  startEditing(): void {
    this.editing = true;
  }

  deleteTravel(): void {
    if (confirm(this.translateService.instant('travel-list.delete-travel-confirmation'))) {
      this.travelService.deleteTravel(this.travel).subscribe(travel => this.delete.emit(travel));
    }
  }

  update(travel): void {
    this.save.emit(travel);
    this.editing = false;
  }

  private showDetail(): void {
    this.editing = false;
  }

}
