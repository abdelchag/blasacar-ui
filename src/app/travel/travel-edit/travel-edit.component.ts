import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'blasacar-travel-edit',
  templateUrl: './travel-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelEditComponent implements OnInit {

  formEdit: FormGroup;
  isProcessing: boolean;

  constructor() { }

  ngOnInit(): void {
    this.formEdit = new FormGroup({});
  }

  update(): void { }

  triggerDelete(): void {
  }

}
