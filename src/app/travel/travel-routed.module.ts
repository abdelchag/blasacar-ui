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
import { WidgetsModule } from './widgets/widgets.module';

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
    TravelCoreModule,
    WidgetsModule,
  ],
  exports: [
    RouterModule
  ]
})


export class TravelRoutedModule {
}
