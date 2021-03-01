import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TravelProposeComponent } from './travel-propose/travel-propose.component';



@NgModule({
  declarations: [TravelProposeComponent],
  imports: [
    SharedModule
  ]
})
export class TravelModule { }
