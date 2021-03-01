import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConnexionPopupComponent } from './components/connexion-popup/connexion-popup.component';
import { FaceInfoSuppPopupComponent } from './components/face-info-supp-popup/face-info-supp-popup.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { ConnexionMemberFormComponent } from './components/connexion-member-form/connexion-member-form.component';


@NgModule({
  declarations: [
    ConnexionPopupComponent,
    MemberFormComponent,
    FaceInfoSuppPopupComponent,
    ConnexionMemberFormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AccountModule { }
