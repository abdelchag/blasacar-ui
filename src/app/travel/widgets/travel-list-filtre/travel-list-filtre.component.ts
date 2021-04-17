import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AffilieCriteriaModel } from 'src/app/shared/models';

@Component({
  selector: 'blasacar-travel-list-filtre',
  templateUrl: './travel-list-filtre.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelListFiltreComponent implements OnInit {

  @Input() criteria: any;
  @Output() applyFilter = new EventEmitter<any>();

  form = new FormGroup({});


  constructor() { }

  ngOnInit(): void {
  }
  apply() {

    this.updateFilterControl();
  }

  updateFilterControl() {

  }

  changeToggleAll(value: boolean) {

  }
}
