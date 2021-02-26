import { ControlValueAccessor, FormControl } from '@angular/forms';
import { AfterViewInit, Directive } from '@angular/core';

@Directive()
export abstract class Mask implements ControlValueAccessor, AfterViewInit {

  control = new FormControl();
  onChange = (phone: any) => { };
  onTouched = () => { };

  abstract transformValueOnWrite(value: any): any;

  abstract transformValueOnChanges(value: any): any;

  ngAfterViewInit(): void {

    this.control.valueChanges
      .subscribe(value => {
        const newValue = this.transformValueOnChanges(value);
        this.onChange(newValue);
      });

  }

  registerOnChange(fn: (phone: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  writeValue(value: any): void {
    const newValue = this.transformValueOnWrite(value);
    this.control.setValue(newValue);
  }

}
