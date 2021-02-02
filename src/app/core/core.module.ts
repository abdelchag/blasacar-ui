import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';


import { DialogsModule } from './dialogs/dialogs.module';
import { LayoutModule } from './layout/layout.module';

import { NotificationsModule } from './notifications/notifications.module';
import { ResolversModule } from './resolvers/resolvers.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [
    DialogsModule,
    NotificationsModule,
    LayoutModule,
    SharedModule,
    ServicesModule.forRoot(),
    ResolversModule.forRoot()
  ],
  exports: [
    DialogsModule,
    NotificationsModule,
    LayoutModule
  ]
})
export class CoreModule { }
