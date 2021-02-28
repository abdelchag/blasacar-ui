import { Component } from '@angular/core';

import { map } from 'rxjs/operators';


import { footerLinksByReseaux } from './footer-constants';


@Component({
  selector: 'blasacar-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  constructor() { }

  get footerLinks$(): any {

    return null;

  }

}
