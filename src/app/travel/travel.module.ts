
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TravelDetailComponent } from './blasacar-travel-detail/blasacar-travel-detail.component';
import { TravelEditComponent } from './blasacar-travel-edit/blasacar-travel-edit.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelProposeComponent } from './travel-propose/travel-propose.component';
import { TravelRoutedModule } from './travel-routed.module';
import { TravelComponent } from './travel.component';

const components = [
  TravelProposeComponent,
  TravelListComponent,
  TravelDetailComponent,
  TravelEditComponent,
  TravelComponent
];

@NgModule({
  declarations: components,
  imports: [
    SharedModule,
    TravelRoutedModule
  ]
})
export class TravelModule { }
