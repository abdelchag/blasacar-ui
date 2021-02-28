import { EventEmitter, Input, OnDestroy, OnInit, Output, Directive } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { configuration } from 'src/app/configuration';
import { ValidationMessageService } from 'src/app/core/services';
import { Helpers } from 'src/app/helpers';

@Directive()
export class BaseSimpleComponent implements OnInit, OnDestroy {

  private _required = new BehaviorSubject<boolean>(false);

  protected debounceTime: number = configuration.debounceTimeDefault;
  protected subscriptions: Subscription[] = new Array<Subscription>();

  error: string;

  displayErase: boolean;
  formControl = new FormControl();

  @Input() controlName: string;
  @Input() formGroup: FormGroup;
  @Input() initialValue: any;
  @Input() label: string;
  @Input() popoverContent: string;
  @Input() toUpperNormalize: boolean;
  @Input() validators: ValidatorFn[] = [];
  @Input() validationMessages: { [key: string]: string } = {};

  @Input()
  set disabled(disabled: boolean) {
    if (disabled) {
      this.formControl.disable({ onlySelf: true });
    } else {
      this.formControl.enable({ onlySelf: true });
    }
  }
  get disabled(): boolean {
    return this.formControl.disabled;
  }

  @Input()
  set required(value) { this._required.next(value); }
  get required(): boolean { return this._required.getValue(); }

  get value(): any { return this.formControl ? this.formControl.value : null; }

  @Output() valueChanged = new EventEmitter<string>();

  constructor(
    private _validationMessageService: ValidationMessageService
  ) { }

  ngOnInit(): void {
    this.formGroup.setControl(this.controlName, this.formControl);

    this.subscriptions.push(
      this._required
        .subscribe(value => this.updateValidator(value)));

    this.subscriptions.push(
      this._validationMessageService.showMessages$
        .subscribe(value => {
          this.formControl.markAsTouched({ onlySelf: true });
        }));

    this.subscriptions.push(
      this.formControl.valueChanges
        .subscribe(value => {
          this.error = this.getError();
          this.valueChanged.emit(value);
        }));

    if (this.toUpperNormalize) {
      this.configureConvertToUpper();
    }

    if (this.initialValue) {
      this.formControl.setValue(this.initialValue, { onlySelf: true, emitEvent: false });
      this.formControl.markAsTouched({ onlySelf: true });
      this.error = this.getError();
    }

    this.onChanges();
  }

  get hadError(): boolean {
    return this.error && (this.formControl.dirty || this.formControl.touched);
  }

  protected updateValidator(isRequired: boolean): void {

    const newvalidators = this.validators ? [...this.validators] : [];

    if (isRequired) {
      newvalidators.push(Validators.required);

      if (!this.validationMessages['required']) {
        this.validationMessages['required'] = configuration.genericMessageForRequire;
      }
    }

    this.formControl.setValidators(newvalidators);
    this.formControl.updateValueAndValidity();
  }

  protected getError(): string {
    const errors = this.formControl.errors;
    if (errors && (this.formControl.touched || this.formControl.dirty)) {
      return Object.keys(errors).map(key => this.validationMessages[key]).find(x => x ? true : false);
    }
    return null;
  }

  protected configureConvertToUpper(): void {
    const subscriptionErrorMessage = this.formControl.valueChanges.pipe(
      debounceTime(this.debounceTime))
      .subscribe(value => {
        if (value && (this.formControl.touched || this.formControl.dirty)) {
          const convertedValue = Helpers.replaceAccents(value).toUpperCase();
          this.formControl.setValue(convertedValue);
        }
      });

    this.subscriptions.push(subscriptionErrorMessage);
  }

  ngOnDestroy(): void {
    this.formGroup.removeControl(this.controlName);
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onChanges(): void {
    this.formControl.valueChanges.subscribe(val => {
      this.displayErase = true;
    });
  }

  clearValue(): void {
    this.displayErase = false;
    this.formControl.reset();
  }

}
