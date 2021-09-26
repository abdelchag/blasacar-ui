import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelDeleteDialogComponent } from './travel-delete-dialog/travel-delete-dialog.component';
import { TravelListFiltreComponent } from './travel-list-filtre/travel-list-filtre.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { TravelTableComponent } from './travel-table/travel-table.component';
import { TravelTableSubDetailComponent } from './travel-table-sub-detail/travel-table-sub-detail.component';
import { ReserveConfirmDialogComponent } from './reserve-confirm-dialog/reserve-confirm-dialog.component';


const components = [
  TravelDeleteDialogComponent,
  TravelListFiltreComponent,
  TravelTableComponent,
  TravelTableSubDetailComponent,
  TravelDetailComponent,
  ReserveConfirmDialogComponent
];
@NgModule({
  imports: [
    NgbPopoverModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  entryComponents: [
    ...components
  ]
})
export class TravelWidgetsModule { }
