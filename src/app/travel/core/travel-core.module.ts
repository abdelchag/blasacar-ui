import { NgModule } from '@angular/core';
import { TravelDetailComponent } from '../widgets/travel-detail/travel-detail.component';
import { TravelDetailsResolver } from './travel-details.resolver';
import { TravelListResolver } from './travel-list.resolver';



@NgModule({
  providers: [
    TravelListResolver,
    TravelDetailsResolver
  ]
})
export class TravelCoreModule { }
