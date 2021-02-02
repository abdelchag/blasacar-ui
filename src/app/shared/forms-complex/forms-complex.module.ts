import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OrganismeComponent } from 'src/app/shared/forms-complex/organisme/organisme.component';
import { FormsSimpleModule } from 'src/app/shared/forms-simple';

import { PipesModule } from '../pipes';
import { WidgetsModule } from '../widgets';
import { AddCompteBancaireComponent } from './add-compte-bancaire/add-compte-bancaire.component';
import { AdresseComponent } from './adresse/adresse.component';
// import {
//   AyantDroitRattachementAutreComponent
// } from './ayant-droit-rattachement/ayant-droit-rattachement-autre/ayant-droit-rattachement-autre.component';
// import {
//   AyantDroitRattachementComponent
// } from './ayant-droit-rattachement/ayant-droit-rattachement/ayant-droit-rattachement.component';
import { CompteListComponent } from './compte-list/compte-list.component';
import { CoordonneesBancairesComponent } from './coordonnees-bancaires/coordonnees-bancaires.component';
import { SignatureComponent } from './signature/signature.component';

const components = [
  AddCompteBancaireComponent,
  AdresseComponent,
  // AyantDroitRattachementAutreComponent,
  // AyantDroitRattachementComponent,
  CompteListComponent,
  CoordonneesBancairesComponent,
  OrganismeComponent,
  SignatureComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    WidgetsModule,
    PipesModule,
    FormsSimpleModule
  ],
  declarations: components,
  exports: components
})
export class FormsComplexModule { }
