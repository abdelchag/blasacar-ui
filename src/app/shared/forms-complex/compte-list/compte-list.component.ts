import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { tap } from 'rxjs/operators';

import { CoordonneesBancairesModel, FileUploadModel } from 'src/app/shared/models';

import { BaseComplexComponent } from '../base-complex.component';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompteListComponent extends BaseComplexComponent implements OnInit {

  @Input() comptes: CoordonneesBancairesModel[] = [];
  @Input() compte: CoordonneesBancairesModel;
  @Input() needDeclaration = false;
  @Input() needRib = false;

  @Output() selectedCompteChanged: EventEmitter<number> = new EventEmitter<number>();

  idControl = new FormControl();
  rib: FileUploadModel = { titre: 'Je fournis un RIB' };

  ngOnInit() {

    super.ngOnInit();

    this.formGroup.addControl('id', this.idControl);
    this.formGroup.addControl('rib', new FormControl());

    if (this.compte) {
      this.idControl.patchValue(this.compte.id);
    }

    this.idControl.valueChanges
      .pipe(
        tap(id => {

          const compte = this.comptes.find(c => c.id === id);
          if (compte) {
            this.formGroup.patchValue(
              { ...compte, declarationTitulaire: true },
              { emitEvent: false });
          } else {
            this.formGroup.reset(
              { id: '' },
              { emitEvent: false });
          }

        })
      )
      .subscribe();

  }

  get canCreateCompte() {
    return this.comptes ? this.comptes.length < 4 : true;
  }

  get hasComptes() {
    return this.comptes ? this.comptes.length > 0 : false;
  }

  get hideForm() {
    return this.hasComptes && !this.newCompteSelected;
  }

  get newCompteSelected() {
    return (this.formGroup.dirty && !this.idControl.value);
  }

  ribSelected(rib: FileUploadModel) {
    this.formGroup.get('rib').patchValue(rib);
  }

}
