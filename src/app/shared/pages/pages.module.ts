import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { WidgetsModule } from '../widgets';
import { DummyComponent } from './dummy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageUnauthorizedComponent } from './page-unauthorized/page-unauthorized.component';
import { PageUnavailableComponent } from './page-unavailable/page-unavailable.component';

const components = [
  PageNotFoundComponent,
  PageUnauthorizedComponent,
  PageUnavailableComponent,
  DummyComponent
];

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule
  ],
  declarations: components,
  exports: components
})
export class PagesModule { }
