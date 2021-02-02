import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppLoaderComponent } from './app-loader/app-loader.component';
import { ServicesSanteComponent } from './app-services-sante/services-sante.component';
import { IbanDetailComponent } from 'src/app/shared/widgets/iban-detail/iban-detail.component';
import { PageLoaderComponent } from 'src/app/shared/widgets/page-loader/page-loader.component';

import { PipesModule } from '../pipes';
import { BoxLoaderComponent } from './box-loader/box-loader.component';
import { BoxSmallLoaderComponent } from './box-small-loader/box-small-loader.component';
import { CompteBancaireComponent } from './compte-bancaire/compte-bancaire.component';
import { ContratListComponent } from './contrat-list/contrat-list.component';
import { DynamicFileUploadComponent } from './dynamic-file-upload/dynamic-file-upload.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { IconComponent } from './icon/icon.component';
import { InfoAdresseComponent } from './info-adresse/info-adresse.component';
import { InfoTextComponent } from './info-text/info-text.component';
import { LiensUtilesComponent } from './liens-utiles/liens-utiles.component';
import { OrganismeRattachementBisComponent } from './organisme-rattachement-bis/organisme-rattachement-bis.component';
import { OrganismeRattachementComponent } from './organisme-rattachement/organisme-rattachement.component';

const components = [
  AppLoaderComponent,
  BoxLoaderComponent,
  BoxSmallLoaderComponent,
  CompteBancaireComponent,
  ContratListComponent,
  DynamicFileUploadComponent,
  FileUploadComponent,
  IbanDetailComponent,
  IconComponent,
  InfoAdresseComponent,
  InfoTextComponent,
  LiensUtilesComponent,
  OrganismeRattachementComponent,
  OrganismeRattachementBisComponent,
  PageLoaderComponent,
  ServicesSanteComponent
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
