import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AffilieTypePipe } from './affilie-type.pipe';
import { AgePipe } from './age.pipe';
import { CivilitePipe } from './civilite.pipe';
import { ClauseBeneficiairePipe } from './clause-beneficiaire.pipe';
import { CollegePipe } from './college.pipe';
import { ContratLabelPipe } from './contrat-label.pipe';
import { CurrencyEuroPipe } from './currency-euro.pipe';
import { DateFrenchPipe } from './date-french.pipe';
import { EtatPaimentPipe } from './etat-paiement.pipe';
import { FileSizePipe } from './file-size.pipe';
import { FormulePipe } from './formule.pipe';
import { GenrePipe } from './genre.pipe';
import { IbanAcountPipe, IbanPipe } from './iban.pipe';
import { ModePaiementPipe } from './mode-paiement.pipe';
import { ModeleAdhesionPipe } from './modele-adhesion.pipe';
import { OrdinalPipe } from './ordinal.pipe';
import { OrganismeRattachementPipe } from './organisme-rattachement.pipe';
import { PercentFrenchPipe } from './percent-french.pipe';
import { PeriodePipe } from './periode.pipe';
import { PeriodicitePipe } from './periodicite.pipe';
import { PhonePipe } from './phone.pipe';
import { QualitePipe } from './qualite.pipe';
import { RattachementPipe } from './rattachement.pipe';
import { RegroupementTauxPipe } from './regroupement-taux.pipe';
import { RisqueIconPipe } from './risque-icon.pipe';
import { RisquePipe } from './risque.pipe';
import { SecuriteSocialePipe } from './securite-sociale.pipe';
import { SiretPipe } from './siret.pipe';
import { SituationFamilialePipe } from './situation-familiale.pipe';
import { StatutAyantDroitPipe } from './statut-ayantdroit.pipe';
import { TeletransmissionPipe } from './teletransmission.pipe';

const pipes = [
  AffilieTypePipe,
  AgePipe,
  CivilitePipe,
  ClauseBeneficiairePipe,
  CollegePipe,
  ContratLabelPipe,
  CurrencyEuroPipe,
  DateFrenchPipe,
  FileSizePipe,
  FormulePipe,
  GenrePipe,
  IbanAcountPipe,
  IbanPipe,
  ModeleAdhesionPipe,
  ModePaiementPipe,
  OrdinalPipe,
  OrganismeRattachementPipe,
  PercentFrenchPipe,
  PeriodePipe,
  PeriodicitePipe,
  PhonePipe,
  QualitePipe,
  RattachementPipe,
  RegroupementTauxPipe,
  RisqueIconPipe,
  RisquePipe,
  SecuriteSocialePipe,
  SiretPipe,
  SituationFamilialePipe,
  StatutAyantDroitPipe,
  TeletransmissionPipe,
  EtatPaimentPipe
];

@NgModule({
  declarations: pipes,
  exports: pipes,
  imports: [CommonModule]
})
export class PipesModule { }
