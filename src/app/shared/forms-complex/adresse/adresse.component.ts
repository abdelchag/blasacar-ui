import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { isoCountryCodes, isoCountrylibelle, typeAdresseCode } from 'src/app/constants';
import { AdresseModel, PaysModel } from 'src/app/shared/models';

import { BaseComplexDirective } from '../base-complex.directive';

@Component({
  selector: 'blasacar-adresse',
  templateUrl: './adresse.component.html',
  styles: []
})
export class AdresseComponent extends BaseComplexDirective implements OnInit {

  @Input() initialValue: AdresseModel;
  @Input() isAdresseRequired: boolean;
  @Input() isComplementAdresse1Required: boolean;
  @Input() isComplementAdresse2Required: boolean;
  @Input() isLieuDitRequired: boolean;
  @Input() isPaysRequired: boolean;
  @Input() disableCodePostalVille: boolean;

  isFrenchAdress = true;
  france: PaysModel = { code: isoCountryCodes.FRANCE, pays: isoCountrylibelle.FRANCE };

  ngOnInit(): void {

    if (this.initialValue) {
      this.isFrenchAdress = this.initialValue.codePays === isoCountryCodes.FRANCE;
    }

    super.ngOnInit();

    this.formGroup.addControl('codePays', new FormControl(
      this.initialValue != null ? this.initialValue.codePays : isoCountryCodes.FRANCE));
    this.formGroup.addControl('isAdressePrincipale', new FormControl(
      this.initialValue != null ? this.initialValue.isAdressePrincipale : true));
    this.formGroup.addControl('typologieCode', new FormControl(
      this.initialValue != null ? this.initialValue.typologieCode : typeAdresseCode.DOMICILE));
  }

  paysChanges(pays: PaysModel): void {
    this.isFrenchAdress = (pays.code === isoCountryCodes.FRANCE || !pays);

    if (!this.initialValue || !this.isFrenchAdress) {
      this.formGroup.get('lieuDit').setValue('');
    } else {
      this.formGroup.get('lieuDit').setValue(this.initialValue.lieuDit);
    }
  }

}
