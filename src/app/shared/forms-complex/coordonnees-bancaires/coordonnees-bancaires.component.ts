import { Component, Input, OnInit } from '@angular/core';

import { CoordonneesBancairesModel } from 'src/app/shared/models';

import { BaseComplexComponent } from '../base-complex.component';

@Component({
  selector: 'app-coordonnees-bancaires',
  templateUrl: './coordonnees-bancaires.component.html',
  styles: []
})
export class CoordonneesBancairesComponent extends BaseComplexComponent implements OnInit {

  @Input() initialValue: CoordonneesBancairesModel;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
