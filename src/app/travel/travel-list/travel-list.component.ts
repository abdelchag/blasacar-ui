import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastNotificationService } from 'src/app/core/services';
import { NotificationType } from 'src/app/constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TravelDeleteDialogComponent } from '../widgets/travel-delete-dialog/travel-delete-dialog.component';
import { finalize } from 'rxjs/operators';

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
    private readonly toastNotificationService: ToastNotificationService,
    private modalService: NgbModal,
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

    const modalReference = this.modalService.open(TravelDeleteDialogComponent, { keyboard: false, centered: true, backdrop: 'static' });
    const component = modalReference.componentInstance as TravelDeleteDialogComponent;
    component.delete
      .subscribe(
        () => {
          component.isLoading = true;
              this.travelService.deleteTravel(this.travel)
              .pipe(
                finalize(() => {
                  component.isLoading = false;
                  component.isProcessed = true;
                    })).subscribe(travel => {
              this.delete.emit(travel);
              this.toastNotificationService.notify({
                type: NotificationType.Success,
                message: 'toast-notifications.travel.travel-deleted'
              });
            });
        });
  }

  update(travel): void {
    this.save.emit(travel);
    this.editing = false;
  }

  private showDetail(): void {
    this.editing = false;
  }

}
