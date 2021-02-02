import { Component, Input, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { configuration } from 'src/app/configuration';
import { ParametrageService, ValidationMessageService } from 'src/app/core/services';

import { CpVilleModel } from '../../models';
import { BaseSimpleComponent } from '../base-simple.component';
import { CpVilleValidator } from '../validators';

@Component({
  selector: 'app-cp-ville',
  templateUrl: './cp-ville.component.html',
  styles: []
})
export class CpVilleComponent extends BaseSimpleComponent implements OnInit {

  @Input() disableCodePostalVille: boolean;
  @Input() inputReadonly: boolean;

  formatter = (result: { codePostal: any; ville: any; }) => {
    return `${result.codePostal} ${result.ville}`;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((search: string) =>
        this.parametrageService.searchCpVille(search)
          .pipe(
            map(o => o.slice(0, 10)),
            catchError(() => {
              return of([]);
            })
          )
      )
    )

  constructor(
    validationMessageService: ValidationMessageService,
    private parametrageService: ParametrageService
  ) {
    super(validationMessageService);
  }

  ngOnInit() {
    // if (this.validators) {
    //   this.validators.push(CpVilleValidator.validate());
    //   this.validationMessages = configuration.validationMessages.cpville;
    // }

    super.ngOnInit();
  }

  formatResult(cpVilleModel: CpVilleModel) {
    return `${cpVilleModel.codePostal} ${cpVilleModel.ville}`;
  }

}
