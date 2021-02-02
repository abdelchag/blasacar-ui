import { Component, Input } from '@angular/core';

import { OrganismeRattachementModel } from 'src/app/shared/models';

@Component({
  selector: 'app-organisme-rattachement-bis',
  templateUrl: './organisme-rattachement-bis.component.html',
  styles: []
})
export class OrganismeRattachementBisComponent {

  @Input() organismeRattachement: OrganismeRattachementModel;

}
