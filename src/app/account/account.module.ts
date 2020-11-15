import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ConnexionPopupComponent } from './components/connexion-popup/connexion-popup.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { FaceInfoSuppPopupComponent } from './components/face-info-supp-popup/face-info-supp-popup.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConnexionPopupComponent,
    MemberFormComponent,
    FaceInfoSuppPopupComponent
  ],
  imports: [
    SharedModule,
    MaterialModule
  ]
})
export class AccountModule { }