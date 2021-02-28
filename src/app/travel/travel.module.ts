import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelProposeComponent } from './travel-propose/travel-propose.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TravelProposeComponent],
  imports: [
    SharedModule
  ]
})
export class TravelModule { }
