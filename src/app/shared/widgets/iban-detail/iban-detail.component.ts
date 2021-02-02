import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CoordonneesBancairesModel } from '../../models';

@Component({
  selector: 'app-iban-detail',
  templateUrl: './iban-detail.component.html',
  styles: []
})
export class IbanDetailComponent {

  @Input() cb: CoordonneesBancairesModel;
  @Input() editButton: boolean;
  @Output() editButtonClick = new EventEmitter();

}
