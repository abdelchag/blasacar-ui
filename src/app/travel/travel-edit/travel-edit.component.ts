import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';
import { Helpers } from 'src/app/helpers';
import { BlasaUtils } from 'src/utils/blasa-utils';
import { Travel } from '../model/travel.model';

@Component({
  selector: 'blasacar-travel-edit',
  templateUrl: './travel-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelEditComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  isProcessing: boolean;
  @Input() travel: Travel;
  @Output() save = new EventEmitter<Travel>();
  AA_YES_CODE: string;
  AA_NO_CODE: string;
  automatiqueAcceptanceOptions = [];

  get price(): any {
    return this.form.get('price');
  }

  get departureTime(): any {
    return moment(this.travel.departureTime).format('HH:mm');
  }

  get departureDate(): any {
    return moment(this.travel.departureDate).format('DD/MM/YYYY');
  }

  constructor(
    private readonly translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.buildAutomatiqueAcceptanceOptions();
  }

  changeAutomatiqueAcceptance(code: string): void {
    this.travel.isAutomatiqueAcceptance = code === this.AA_YES_CODE;
  }

  getAutomatiqueAcceptance(): string {
    if (BlasaUtils.isNullOrUndefined(this.travel.isAutomatiqueAcceptance)) {
      return null;
    }
    return this.travel.isAutomatiqueAcceptance ? this.AA_YES_CODE : this.AA_NO_CODE;
  }

  update(): void {
    // if (this.form.invalid) {
    //   Helpers.showErrors(this.form);
    //   return;
    // }
    this.save.emit(this.travel);
   }

  triggerDelete(): void {
  }

  private buildAutomatiqueAcceptanceOptions(): void {
    forkJoin([
      this.translateService.get('travel-propose.automatique-acceptance.yes'),
      this.translateService.get('travel-propose.automatique-acceptance.no')
    ]).subscribe((results: string[]) => {
      this.automatiqueAcceptanceOptions = [
        { code: this.AA_YES_CODE, libelle: results[0] },
        { code: this.AA_NO_CODE, libelle: results[1] }
      ];
    });
  }

}
