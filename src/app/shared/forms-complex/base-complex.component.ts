import { Input, OnDestroy, OnInit, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive()
export class BaseComplexComponent implements OnInit, OnDestroy {

  @Input() disabled: boolean;
  @Input() controlName: string;
  @Input() parentformGroup: FormGroup;
  @Input() required: boolean;

  formGroup = new FormGroup({});

  ngOnInit() {
    this.parentformGroup.addControl(this.controlName, this.formGroup);
  }

  ngOnDestroy() {
    this.parentformGroup.removeControl(this.controlName);
  }

}
