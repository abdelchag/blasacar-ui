import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AdresseModel } from 'src/app/shared/models';

@Component({
  selector: 'app-info-adresse',
  templateUrl: './info-adresse.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoAdresseComponent {

  @Input() label: string;
  @Input() adresse: AdresseModel;

}
