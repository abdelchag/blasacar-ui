import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { DialogService } from './dialog.service';
import { MenuService } from './menu.service';
import { SidebarStateService } from './sidebar-state.service';
import { TnsService } from './tns.service';
import { ToastNotificationService } from './toast-notification.service';
import { UtilisateurService } from './utilisateur.service';
import { ValidationMessageService } from './validation-message.service';

/**
 * Gère les services à fournir à toute l'application
 * Ce module est à charger dans le module app.module uniquement
 */
@NgModule({
  imports: [
    CommonModule
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        DialogService,
        MenuService,
        SidebarStateService,
        TnsService,
        ToastNotificationService,
        UtilisateurService,
        ValidationMessageService
      ]
    };
  }
}
