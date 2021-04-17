
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { TravelConsultComponent } from './travel-consult/travel-consult.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelEditComponent } from './travel-edit/travel-edit.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelProposeComponent } from './travel-propose/travel-propose.component';
import { TravelRoutedModule } from './travel-routed.module';
import { TravelSearchComponent } from './travel-search/travel-search.component';
import { TravelComponent } from './travel.component';
import { TravelWidgetsModule } from './widgets/travel-widgets.module';

const components = [
  TravelProposeComponent,
  TravelListComponent,
  TravelDetailComponent,
  TravelEditComponent,
  TravelComponent,
  TravelConsultComponent,
  TravelSearchComponent
];

@NgModule({
  declarations: components,
  imports: [
    SharedModule,
    TravelRoutedModule,
    TranslateModule,
    TravelWidgetsModule
  ],
  exports: [
    TranslateModule
  ]
})
export class TravelModule { }
