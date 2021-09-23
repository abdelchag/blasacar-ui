import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Helpers } from 'src/app/helpers';
import { TravelFilter } from '../../model/travel-filter';

@Component({
  selector: 'blasacar-travel-list-filtre',
  templateUrl: './travel-list-filtre.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelListFiltreComponent implements OnInit {

  @Input() criteria: TravelFilter;
  @Output() applyFilter = new EventEmitter<TravelFilter>();

  form = new FormGroup({});


  constructor() { }

  ngOnInit(): void {

  }
  apply() {
    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }

    Object.assign(this.criteria, this.form.value);
    this.applyFilter.emit(this.criteria);

    this.updateFilterControl();
  }

  updateFilterControl() {

  }

  changeToggleAll(value: boolean) {

  }
}
