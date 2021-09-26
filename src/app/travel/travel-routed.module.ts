import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTING_PATH} from '../routing-constants';
import {TravelListResolver} from './core/travel-list.resolver';
import {TravelCoreModule} from './core/travel-core.module';
import {TravelConsultComponent} from './travel-consult/travel-consult.component';
import {TravelProposeComponent} from './travel-propose/travel-propose.component';
import {TravelComponent} from './travel.component';
import { AuthentificationGuard } from '../guards/authentification.guard';
import { TravelWidgetsModule } from './widgets/travel-widgets.module';
import { SharedModule } from '../shared/shared.module';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelDetailsResolver } from './core/travel-details.resolver';

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
      {
        path: ROUTING_PATH.TRAVEL_DETAILS,
        children: [
          {
            path: ':idTravel',
            component: TravelDetailsComponent,
            resolve: {
              travels: TravelDetailsResolver
            }
          }
        ]
      },
      {path: '', redirectTo: ROUTING_PATH.TRAVEL_LIST, pathMatch: 'full'}
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TravelCoreModule,
    TravelWidgetsModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})


export class TravelRoutedModule {
}
