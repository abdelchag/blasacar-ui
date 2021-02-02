import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { configuration } from 'src/app/configuration';
import { motifRadiation, motifsRadiation, risque } from 'src/app/constants';
import { Helpers } from 'src/app/helpers';
import { DateRadiationWithinRangeValidator } from 'src/app/shared/forms-simple';
import { AdhesionModel, ContratModel, ListItemModel, RadiationModel } from 'src/app/shared/models';


// TODO JEDE 14/10/2020 - NOVASFC-1912 - Renommer le composant en SalarieRadiationDialogComponent et le déplacer si spécifique à une feature
@Component({
  templateUrl: './radiation-dialog.component.html'
})
export class RadiationDialogComponent implements OnInit, OnDestroy {

  @Input() adhesion: AdhesionModel;
  @Input() needMotif: boolean;
  @Input() dateEmbauche: Date;
  @Output() radier = new EventEmitter<RadiationModel>();
  @Output() dateResiliationChanged = new EventEmitter<Date>();

  contrats: ContratModel[];
  moisPortabilite: ListItemModel[] = [];
  // TODO JEDE 14/10/2010 - NOVASFC-1912 - Sur quelle donnée faut-il trier les motifs ? Le code, le libellé, les 2 ?
  motifsRadiation: ListItemModel[] = [];

  form = new FormGroup({});
  isProcessed = false;
  isLoading = false;
  canDoPortabilite = false;
  isRadiationDone = false;
  hasUnAnAnciennete = false;
  displayChoixPortabilite = false;
  rechercheValeursMoisPortabilite = false;

  dateRadiationWithinRangeValidator: ValidatorFn[];

  subscription = new Subscription();

  constructor(
    private activeModal: NgbActiveModal,
  ) {
    
  }

  get dateRadiationValidationMessage(): any {
    return configuration.validationMessages.dateRadiationSalarie;
  }

  ngOnInit() {
    this.dateRadiationWithinRangeValidator = [DateRadiationWithinRangeValidator.validateForOuvrantDroit(this.adhesion.dateAffiliation)];

    this.motifsRadiation = JSON.parse(JSON.stringify(motifsRadiation)).sort();
    const indexOfChangementCollege = this.motifsRadiation.findIndex(x => x.code === motifRadiation.RAS_RET_01);
    this.motifsRadiation.splice(indexOfChangementCollege, 1);

    if (this.adhesion.codeRisque === risque.PREVOYANCE) {
      const indexOfDispenseAffiliation = this.motifsRadiation.findIndex(x => x.code === motifRadiation.RAS_RET_10);
      this.motifsRadiation.splice(indexOfDispenseAffiliation, 1);
    }

    const parsedDateEmbauche = moment(this.dateEmbauche, 'DD/MM/YYYY', true).toDate();
    const dateDebutValidation = new Date(parsedDateEmbauche.getFullYear() + 1, parsedDateEmbauche.getMonth(), parsedDateEmbauche.getDate());

    const today = new Date();

    this.hasUnAnAnciennete = Helpers.compareDate(moment(today, 'DD/MM/YYYY', true), moment(dateDebutValidation, 'DD/MM/YYYY', true)) === -1;

  }

  checkboxChanged(event: any) {
    this.displayChoixPortabilite = Boolean(event.target.checked);
  }

  onDateResiliationChanged() {
    this.moisPortabilite = [];
    const currentDate = this.form.get('date').value;

    if (currentDate !== '') {
      const dateResiliation = moment(currentDate, 'DD/MM/YYYY', true).toDate();
      this.rechercheValeursMoisPortabilite = true;
      this.dateResiliationChanged.emit(dateResiliation);

    } else {
      this.displayChoixPortabilite = false;
      const porta = this.form.get('goPortabilite');
      if (porta !== null) {
        porta.setValue(false);
      }
    }
  }

  motifChanged(motif: string) {
    this.canDoPortabilite = motif === motifRadiation.RAS_RET_07
      || motif === motifRadiation.RAS_RET_05
      || motif === motifRadiation.RAS_RET_02;
    this.displayChoixPortabilite = this.canDoPortabilite && this.displayChoixPortabilite;
  }

  close() {
    this.activeModal.close();
  }

  valider() {
    this.radier.emit(this.form.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
