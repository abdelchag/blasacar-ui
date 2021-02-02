import { Component, Input } from '@angular/core';

import { OrganismeRattachementModel } from 'src/app/shared/models';

@Component({
  selector: 'app-organisme-rattachement',
  templateUrl: './organisme-rattachement.component.html',
  styles: []
})
export class OrganismeRattachementComponent {

  @Input() organismeRattachement: OrganismeRattachementModel;

  get organismeRattachementValue() {
    return this.organismeRattachement
      ? `${this.organismeRattachement.codeRegime} ${this.organismeRattachement.codeCaisse} ${this.organismeRattachement.codeCentre}`
      : '';
  }

}
