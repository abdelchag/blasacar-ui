import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html'
})
export class PageWelcomeComponent {

  @Input() reseau: string;

  @Output() commencer = new EventEmitter();
}
