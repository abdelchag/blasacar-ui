import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';


import { Helpers } from 'src/app/helpers';
import { ContratModel, CoordonneesBancairesModel } from 'src/app/shared/models';

@Component({
  selector: 'app-compte-bancaire',
  templateUrl: './compte-bancaire.component.html',
})
export class CompteBancaireComponent implements OnInit {

  @Input() contrat: ContratModel;
  @Input() compteBancaire: CoordonneesBancairesModel;
  @Input() isRemboursement: boolean;
  @Input() label: string;
  @Input() canEdit: boolean;

  @Output() createCompte: EventEmitter<Event> = new EventEmitter<Event>();

  isApporteur$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
  ) { }



  ngOnInit() {



  }

  clickCreateCompte(): void {
    this.createCompte.emit();
  }
}
