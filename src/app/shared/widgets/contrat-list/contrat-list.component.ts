import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { profil, risque } from 'src/app/constants';
import { Helpers } from 'src/app/helpers';
import { ContratModel } from 'src/app/shared/models';

@Component({
  selector: 'app-contrat-list',
  templateUrl: './contrat-list.component.html',
  styles: []
})
export class ContratListComponent implements OnInit, OnDestroy {

  @Input() contrats: ContratModel[];
  @Input() showCollege = false;

  sortedContrats: ContratModel[] = [];
  subscriptions: Subscription = new Subscription();
  profilTypeCode: string;

  constructor(
  ) {


  }

  ngOnInit() {
    this.sortedContrats = this.sortByRisque(this.contrats);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getRouterLink(contrat: ContratModel) {
    const risqueSegment = contrat.codeRisque === risque.SANTE ? 'sante' : 'prevoyance';

    // TODO: JEDE (14/11/2019) Harmoniser les chemins de navigation ???
    switch (this.profilTypeCode) {
      case profil.TNS:
        return ['/contrats', risqueSegment, contrat.numeroContrat];
      case profil.SALARIE:
        return ['/contrats', contrat.numeroContrat, risqueSegment];
      case profil.ENTREPRISE:
        if (contrat.isActif) {
          return ['/contrats', contrat.numeroContrat, 'affilies'];
        }

        const today = new Date();
        const isContratFutur = Helpers.compareDate(moment(contrat.dateEffet, 'DD/MM/YYYY', true), moment(today, 'DD/MM/YYYY', true)) === -1;
        if (contrat.isResilie || contrat.isSuspendu || (!contrat.isActif && isContratFutur)) {
          return ['/contrats', contrat.numeroContrat, 'affilies'];
        }

        break;
    }
  }

  sortByRisque(contrats: ContratModel[]) {
    return contrats
      .sort((a, b) => a.codeRisque === risque.SANTE ? -1 : 1);
  }

}
