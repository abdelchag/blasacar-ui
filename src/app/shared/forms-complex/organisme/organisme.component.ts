import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { forkJoin } from 'rxjs';

import { ParametrageService } from 'src/app/core/services';

import { ListItemModel, OrganismeRattachementModel as OrganismeRattachementModel } from '../../models';
import { BaseComplexComponent } from '../base-complex.component';

@Component({
  selector: 'app-organisme',
  templateUrl: './organisme.component.html',
  styles: []
})

export class OrganismeComponent extends BaseComplexComponent implements OnInit {

  @Input() initialValue: OrganismeRattachementModel;

  regimes: ListItemModel[] = [];
  caisses: ListItemModel[] = [];
  centres: ListItemModel[] = [];

  currentRegime: string;
  currentCaisse: string;

  get regimeControl() {
    return this.formGroup.get('codeRegime') as FormControl;
  }

  get caisseControl() {
    return this.formGroup.get('codeCaisse') as FormControl;
  }

  get centreControl() {
    return this.formGroup.get('codeCentre') as FormControl;
  }

  constructor(
    private parametrageService: ParametrageService
  ) {
    super();
  }

  ngOnInit() {

    super.ngOnInit();

    if (this.initialValue) {

      forkJoin([
        this.parametrageService.getRegimes(),
        this.parametrageService.getCaisses(this.initialValue.codeRegime),
        this.parametrageService.getCentres(this.initialValue.codeRegime, this.initialValue.codeCaisse)
      ])
        .subscribe(([regimes, caisses, centres]) => {

          this.regimes = regimes;
          this.caisses = caisses;
          this.centres = centres;

          // Un léger délai dans la création des formcontrol oblige à faire un setTimeout
          // Cela pousse encore plus à revoir la gestion des formulaires
          // pour être vraiment en reactive forms où la création des controles
          // devrait être faite dans les composants appelants et pas dans les composants enfants.
          // Cela nous débarasserait un fois pour toute des ExpressionChangedAfterItHasBeenCheckedError
          setTimeout(() => {
            this.regimeControl.setValue(this.initialValue.codeRegime, { emitEvent: false });
            this.caisseControl.setValue(this.initialValue.codeCaisse, { emitEvent: false });
            this.centreControl.setValue(this.initialValue.codeCentre, { emitEvent: false });
          }, 1000);

        });

    } else {

      this.parametrageService
        .getRegimes()
        .subscribe(regimes => {
          this.regimes = regimes;
          this.disable(this.caisseControl);
          this.disable(this.centreControl);
        });
    }

  }

  regimeChanges(regime: string) {

    if (this.currentRegime !== regime) {

      this.currentRegime = regime;

      this.reset(this.caisseControl);
      this.caisses = [];

      this.reset(this.centreControl);
      this.centres = [];

      if (regime) {
        this.parametrageService
          .getCaisses(regime)
          .subscribe(caisses => {
            this.caisses = caisses;
            this.enable(this.caisseControl);
          });
      }
    }

  }

  caisseChanges(regime: string, caisse: string) {

    if (this.currentCaisse !== caisse) {

      this.currentCaisse = caisse;

      this.reset(this.centreControl);
      this.centres = [];

      if (regime && caisse) {
        this.parametrageService
          .getCentres(regime, caisse)
          .subscribe(centres => {
            this.centres = centres;
            this.enable(this.centreControl);
          });
      }
    }

  }

  disable(control: FormControl) {
    if (control) {
      control.disable({ emitEvent: false });
    }
  }

  enable(control: FormControl) {
    control.enable({ emitEvent: false });
  }

  reset(control: FormControl) {
    control.reset('');
    this.disable(control);
  }

}
