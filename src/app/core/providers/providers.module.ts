import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ReseauProvider } from './reseau.provider';
import { AyantDroitStateProvider } from './ayant-droit-state.provider';

const providers = [
  ReseauProvider, AyantDroitStateProvider
];
@NgModule({
  imports: [
    CommonModule
  ]
})
export class ProvidersModule {
  static forRoot(): ModuleWithProviders<ProvidersModule> {
    return {
      ngModule: ProvidersModule,
      providers: [
        ...providers
      ]
    };
  }
}
