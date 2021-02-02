import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { configuration } from 'src/app/configuration';
import { ParametrageService, ValidationMessageService } from 'src/app/core/services';
import { PaysModel } from 'src/app/shared/models/pays.model';

import { BaseSimpleComponent } from '../base-simple.component';
import { PaysValidator } from '../validators/paysValidator';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html'
})
export class PaysComponent extends BaseSimpleComponent implements OnInit, OnDestroy {

  public listPays: PaysModel[];

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      map(term => term === '' ? []
        : this.listPays.filter(v => v.pays.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(
    validationMessageService: ValidationMessageService,
    private parametrageService: ParametrageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {

    if (this.validators) {
      this.validators.push(PaysValidator.validate());
      this.validationMessages = configuration.validationMessages.pays;
    }

    this.subscriptions.push(
      this.parametrageService.getAllPays()
        .subscribe(
          data => this.listPays = data
        ));

    super.ngOnInit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  formatter = (x: PaysModel) => x.pays;

}
