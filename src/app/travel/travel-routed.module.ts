import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelProposeComponent } from './travel-propose/travel-propose.component';
import { TravelComponent } from './travel.component';
import { ROUTING_PATH } from '../routing-constants';

const routes: Routes = [
  {
    path: ROUTING_PATH.TRAVEL,
    component: TravelComponent,

    children: [
      { path: ROUTING_PATH.TRAVEL_PROPOSE, component: TravelProposeComponent },
      { path: ROUTING_PATH.TRAVEL_LIST, component: TravelListComponent },
      {
        path: '',
        redirectTo: ROUTING_PATH.TRAVEL_LIST,
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})


export class TravelRoutedModule { }
