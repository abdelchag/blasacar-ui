import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
      FooterComponent,
      HeaderComponent
  ],
  providers: [],
  bootstrap: [],
})
export class LayoutModule { }
