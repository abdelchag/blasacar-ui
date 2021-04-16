import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionMemberFormComponent } from './account/components/connexion-member-form/connexion-member-form.component';
import { MemberFormComponent } from './account/components/member-form/member-form.component';
import { ROUTING_PATH } from './routing-constants';
import { SharedModule } from './shared/shared.module';
import { TravelSearchComponent } from './travel/travel-search/travel-search.component';

const routes: Routes = [
  { path: ROUTING_PATH.ROOT, component: TravelSearchComponent },
  { path: ROUTING_PATH.MEMBER, component: MemberFormComponent },
  { path: ROUTING_PATH.CONNEXION_MEMBER, component: ConnexionMemberFormComponent },
  {
    path: ROUTING_PATH.TRAVEL,
    children: [
      {
        path: ROUTING_PATH.TRAVEL,
        loadChildren: () => import('src/app/travel/travel-routed.module').then(m => m.TravelRoutedModule),
      }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


