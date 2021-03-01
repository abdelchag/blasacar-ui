import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionMemberFormComponent } from './account/components/connexion-member-form/connexion-member-form.component';
import { MemberFormComponent } from './account/components/member-form/member-form.component';
import { TravelProposeComponent } from './travel/travel-propose/travel-propose.component';

const routes: Routes = [
  { path: 'membre', component: MemberFormComponent },
  { path: 'connexion-membre', component: ConnexionMemberFormComponent },
  { path: 'travel-propose', component: TravelProposeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


