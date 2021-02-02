import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BaseComplexComponent } from '../base-complex.component';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignatureComponent extends BaseComplexComponent implements OnInit {

  @Input() email: string;
  @Input() telephonePortable: string;

  ngOnInit() {
    super.ngOnInit();
  }

}
