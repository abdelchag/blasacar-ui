import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationGuard } from '../guards/authentification.guard';
import { ROUTING_PATH } from '../routing-constants';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelProposeComponent } from './travel-propose/travel-propose.component';
import { TravelComponent } from './travel.component';

const routes: Routes = [
  {
    path: ROUTING_PATH.TRAVEL,
    component: TravelComponent,
    canActivate: [AuthentificationGuard],
    children: [
      { path: ROUTING_PATH.TRAVEL_PROPOSE, component: TravelProposeComponent },
      { path: ROUTING_PATH.TRAVEL_LIST, component: TravelListComponent },
      { path: '', redirectTo: ROUTING_PATH.TRAVEL_LIST, pathMatch: 'full' }
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
