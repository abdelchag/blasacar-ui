import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ConnexionPopupComponent } from './components/connexion-popup/connexion-popup.component';
import { MemberFormComponent } from './components/member-form/member-form.component';


@NgModule({
  declarations: [
    ConnexionPopupComponent,
    MemberFormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AccountModule { }