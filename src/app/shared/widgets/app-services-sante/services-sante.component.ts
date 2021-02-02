import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Helpers } from 'src/app/helpers';
import { AdhesionTnsModel, ContratModel } from 'src/app/shared/models';


@Component({
  selector: 'app-services-sante',
  templateUrl: './services-sante.component.html',
  styles: []
})
export class ServicesSanteComponent implements OnInit, OnDestroy {

  @Input()
  contratSante: ContratModel;
  adhesionTns: AdhesionTnsModel;
  subscription = new Subscription();
  isApporteur: boolean;
  isGanEuro = false;

  constructor(
    
  ) {
    
  }



  get hasContratSeveane(): boolean {
    return this.adhesionTns && this.adhesionTns.mcrCode ? this.adhesionTns.mcrCode.indexOf('_SEV') !== -1 : false;
  }



  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
