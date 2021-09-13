import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgePipe } from './age.pipe';
import { CivilitePipe } from './civilite.pipe';
import { CollegePipe } from './college.pipe';
import { CurrencyEuroPipe } from './currency-euro.pipe';
import { DateFrenchPipe } from './date-french.pipe';
import { FileSizePipe } from './file-size.pipe';
import { FormulePipe } from './formule.pipe';
import { GenrePipe } from './genre.pipe';
import { IbanAcountPipe, IbanPipe } from './iban.pipe';
import { ModePaiementPipe } from './mode-paiement.pipe';
import { OrdinalPipe } from './ordinal.pipe';
import { PercentFrenchPipe } from './percent-french.pipe';
import { PeriodePipe } from './periode.pipe';
import { PeriodicitePipe } from './periodicite.pipe';
import { PhonePipe } from './phone.pipe';
import { QualitePipe } from './qualite.pipe';
import { RattachementPipe } from './rattachement.pipe';
import { RisqueIconPipe } from './risque-icon.pipe';
import { RisquePipe } from './risque.pipe';
import { SecuriteSocialePipe } from './securite-sociale.pipe';
import { SiretPipe } from './siret.pipe';
import { SituationFamilialePipe } from './situation-familiale.pipe';
import { StatutAyantDroitPipe } from './statut-ayantdroit.pipe';
import { BooleanToOuiNonPipe } from './boolean-to-oui-non.pipe';

const pipes = [
  AgePipe,
  CivilitePipe,
  CollegePipe,
  CurrencyEuroPipe,
  DateFrenchPipe,
  FileSizePipe,
  FormulePipe,
  GenrePipe,
  IbanAcountPipe,
  IbanPipe,
  ModePaiementPipe,
  OrdinalPipe,
  PercentFrenchPipe,
  PeriodePipe,
  PeriodicitePipe,
  PhonePipe,
  QualitePipe,
  RattachementPipe,
  RisqueIconPipe,
  RisquePipe,
  SecuriteSocialePipe,
  SiretPipe,
  SituationFamilialePipe,
  StatutAyantDroitPipe,
  BooleanToOuiNonPipe
];

@NgModule({
  declarations: pipes,
  exports: pipes,
  imports: [CommonModule]
})
export class PipesModule { }
