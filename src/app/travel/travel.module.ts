import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TravelProposeComponent } from './travel-propose/travel-propose.component';
import { TravelConsultComponent } from './travel-consult/travel-consult.component';



@NgModule({
  declarations: [TravelProposeComponent, TravelConsultComponent],
  imports: [
    SharedModule
  ]
})
export class TravelModule { }
