import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

const providers = [
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
