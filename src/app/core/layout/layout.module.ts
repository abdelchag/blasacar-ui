import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'src/app/shared/shared.module';

import { ArianeComponent } from './ariane/ariane.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

const exportImportComponents = [
  ArianeComponent,
  FooterComponent,
  HeaderComponent,
  MenuComponent
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModule
  ],
  declarations: [
    ...exportImportComponents
  ],
  exports: [
    ...exportImportComponents
  ]
})
export class LayoutModule { }
