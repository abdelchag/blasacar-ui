import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionMemberFormComponent } from './account/components/connexion-member-form/connexion-member-form.component';
import { MemberFormComponent } from './account/components/member-form/member-form.component';
import { AuthentificationGuard } from './guards/authentification.guard';
import { TravelProposeComponent } from './travel/travel-propose/travel-propose.component';

const routes: Routes = [
  { path: 'membre', component: MemberFormComponent },
  { path: 'connexion-membre', component: ConnexionMemberFormComponent },
  { path: 'travel-propose', component: TravelProposeComponent, canActivate: [AuthentificationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


