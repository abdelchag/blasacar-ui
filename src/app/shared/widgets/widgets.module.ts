import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppLoaderComponent } from './app-loader/app-loader.component';
import { PageLoaderComponent } from 'src/app/shared/widgets/page-loader/page-loader.component';

import { PipesModule } from '../pipes';
import { BoxLoaderComponent } from './box-loader/box-loader.component';
import { BoxSmallLoaderComponent } from './box-small-loader/box-small-loader.component';
import { IconComponent } from './icon/icon.component';
import { InfoAdresseComponent } from './info-adresse/info-adresse.component';
import { InfoTextComponent } from './info-text/info-text.component';

const components = [
  AppLoaderComponent,
  BoxLoaderComponent,
  BoxSmallLoaderComponent,
  IconComponent,
  InfoAdresseComponent,
  InfoTextComponent,
  PageLoaderComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    AngularSvgIconModule.forRoot(),
    PipesModule
  ]
})
export class WidgetsModule { }
