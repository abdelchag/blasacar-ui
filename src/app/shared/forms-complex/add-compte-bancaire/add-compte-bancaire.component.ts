import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { compteLimit } from 'src/app/constants';
import { ContratModel, CoordonneesBancairesModel } from 'src/app/shared/models';

@Component({
  selector: 'app-add-compte-bancaire',
  templateUrl: './add-compte-bancaire.component.html',
})
export class AddCompteBancaireComponent implements OnInit {
  @Input() contrat: ContratModel;
  @Input() comptes: CoordonneesBancairesModel[];
  @Input() compteBancaire: CoordonneesBancairesModel;
  @Input() title: string;
  @Input() disabled = false;

  @Input() compteForm: FormGroup;
  canCreateCompte = true;

  @Output() selectionChanged: EventEmitter<CoordonneesBancairesModel> = new EventEmitter<CoordonneesBancairesModel>();
  @Output() goToFaq: EventEmitter<boolean> = new EventEmitter<boolean>();

  get compteControl() {
    return this.compteForm.get('compte') as FormControl;
  }

  get isValid() {
    return this.compteForm.valid;
  }

  constructor(
  ) { }

  ngOnInit() {
    this.canCreateCompte = this.compteBancaire ? this.comptes.length < (compteLimit - 1) : this.comptes.length < compteLimit;
  }

  goToFAQ(): void {
    this.goToFaq.emit(true);
  }

  selectionChange(): void {
    this.selectionChanged.emit(this.compteForm.value);
  }

}
