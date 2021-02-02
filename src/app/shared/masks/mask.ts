import { ControlValueAccessor, FormControl } from '@angular/forms';
import { AfterViewInit, Directive } from '@angular/core';

@Directive()
export abstract class Mask implements ControlValueAccessor, AfterViewInit {

  control = new FormControl();
  onChange = (phone: any) => { };
  onTouched = () => { };

  abstract transformValueOnWrite(value: any): any;

  abstract transformValueOnChanges(value: any): any;

  ngAfterViewInit() {

    this.control.valueChanges
      .subscribe(value => {
        const newValue = this.transformValueOnChanges(value);
        this.onChange(newValue);
      });

  }

  registerOnChange(fn: (phone: any) => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  writeValue(value: any) {
    const newValue = this.transformValueOnWrite(value);
    this.control.setValue(newValue);
  }

}
