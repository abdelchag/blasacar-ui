import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormsSimpleModule } from 'src/app/shared/forms-simple';

import { PipesModule } from '../pipes';
import { WidgetsModule } from '../widgets';
import { AdresseComponent } from './adresse/adresse.component';
// import {
//   AyantDroitRattachementAutreComponent
// } from './ayant-droit-rattachement/ayant-droit-rattachement-autre/ayant-droit-rattachement-autre.component';
// import {
//   AyantDroitRattachementComponent
// } from './ayant-droit-rattachement/ayant-droit-rattachement/ayant-droit-rattachement.component';

const components = [
  AdresseComponent,
  // AyantDroitRattachementAutreComponent,
  // AyantDroitRattachementComponent,
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
