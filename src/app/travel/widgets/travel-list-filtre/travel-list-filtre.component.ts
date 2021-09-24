import { analyzeFile } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Helpers } from 'src/app/helpers';
import { TravelFilter } from '../../model/travel-filter';

@Component({
  selector: 'blasacar-travel-list-filtre',
  templateUrl: './travel-list-filtre.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelListFiltreComponent implements OnInit {

  @Input() travelFilter: TravelFilter;
  @Output() applyFilter = new EventEmitter<TravelFilter>();

  form = new FormGroup({});

  @ViewChild('popoverFilter') popoverFilterRef: NgbPopover;


  constructor() { }

  ngOnInit(): void {
  }
  apply() {
    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }
    this.applyFilter.emit(this.travelFilter);
    this.popoverFilterRef.close();
  }

  updateFilterControl() {

  }

  changeToggleAll(value: boolean) {

  }
}
