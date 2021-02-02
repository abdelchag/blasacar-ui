import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageApporteurUnauthorizedComponent } from './page-apporteur-unauthorized/page-apporteur-unauthorized.component';

import { WidgetsModule } from '../widgets';
import { DummyComponent } from './dummy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageUnauthorizedComponent } from './page-unauthorized/page-unauthorized.component';
import { PageUnavailableComponent } from './page-unavailable/page-unavailable.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';

const components = [
  PageApporteurUnauthorizedComponent,
  PageNotFoundComponent,
  PageUnauthorizedComponent,
  PageUnavailableComponent,
  PageWelcomeComponent,
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
