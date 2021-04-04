import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthentificationGuard} from '../guards/authentification.guard';
import {ROUTING_PATH} from '../routing-constants';
import {TravelListResolver} from './core/travel-list.resolver';
import {TravelCoreModule} from './core/travel-core.module';
import {TravelConsultComponent} from './travel-consult/travel-consult.component';
import {TravelListComponent} from './travel-list/travel-list.component';
import {TravelProposeComponent} from './travel-propose/travel-propose.component';
import {TravelComponent} from './travel.component';

const routes: Routes = [
  {
    path: ROUTING_PATH.TRAVEL,
    component: TravelComponent,
    canActivate: [AuthentificationGuard],
    children: [
      {path: ROUTING_PATH.TRAVEL_PROPOSE, component: TravelProposeComponent},
      {
        path: ROUTING_PATH.TRAVEL_LIST,
        component: TravelConsultComponent,
        resolve: {
          travels: TravelListResolver
        }
      },
      {path: '', redirectTo: ROUTING_PATH.TRAVEL_LIST, pathMatch: 'full'}
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TravelCoreModule
  ],
  exports: [
    RouterModule
  ]
})


export class TravelRoutedModule {
}
