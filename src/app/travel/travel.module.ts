
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { TravelConsultComponent } from './travel-consult/travel-consult.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelEditComponent } from './travel-edit/travel-edit.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelProposeComponent } from './travel-propose/travel-propose.component';
import { TravelRoutedModule } from './travel-routed.module';
import { TravelComponent } from './travel.component';

const components = [
  TravelProposeComponent,
  TravelListComponent,
  TravelDetailComponent,
  TravelEditComponent,
  TravelComponent,
  TravelConsultComponent
];

@NgModule({
  declarations: components,
  imports: [
    SharedModule,
    TravelRoutedModule,
    TranslateModule,
  ],
  exports: [
  TranslateModule,
  ]
})
export class TravelModule { }
