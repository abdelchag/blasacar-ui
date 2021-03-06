import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotImplementedDirective } from './directives/not-implemented.directive';

const components: any[] = [
];

const directives: any[] = [
  NotImplementedDirective
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    ...components,
    ...directives
  ],
  exports: [
    ...components,
    ...directives
  ]

})
export class DirectivesModule { }
