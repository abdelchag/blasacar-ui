import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';


import { CanActivateProfil } from './can-activate-profil.guard';
import { CguGuard } from './cgu.guard';
import { PageNotFoundGuard } from './page-not-found-guard';
import { PersonneAsTnsResolver } from './personne-as-tns.resolver';
import { UtilisateurGuard } from './utilisateur.guard';

const resolvers = [
  CanActivateProfil,
  CguGuard,
  PageNotFoundGuard,
  PersonneAsTnsResolver,
  UtilisateurGuard
];

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ResolversModule {
  static forRoot(): ModuleWithProviders<ResolversModule> {
    return {
      ngModule: ResolversModule,
      providers: resolvers
    };
  }
}
