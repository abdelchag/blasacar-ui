import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';
import { Helpers } from 'src/app/helpers';
import { BlasaUtils } from 'src/utils/blasa-utils';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';

@Component({
  selector: 'blasacar-travel-edit',
  templateUrl: './travel-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelEditComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  isProcessing: boolean;
  @Input() travel: Travel;
  travelToEdited: Travel = new Travel();
  @Output() save = new EventEmitter<Travel>();
  readonly AA_YES_CODE = 'Y';
  readonly AA_NO_CODE = 'N';
  automaticAcceptanceOptions = [];

  get price(): any {
    return this.form.get('price');
  }

  get departureDate(): any {
    return moment(this.travel.departureDate).format('DD/MM/YYYY');
  }

  constructor(
    private readonly translateService: TranslateService,
    private readonly travelService: TravelService,
  ) { }

  ngOnInit(): void {
    this.buildAutomaticAcceptanceOptions();
    Object.assign(this.travelToEdited, this.travel);
  }

  changeAutomaticAcceptance(code: string): void {
    this.travelToEdited.isAutomaticAcceptance = code === this.AA_YES_CODE;
  }

  getAutomaticAcceptance(): string {
    if (BlasaUtils.isNullOrUndefined(this.travelToEdited.isAutomaticAcceptance)) {
      return null;
    }
    return this.travelToEdited.isAutomaticAcceptance ? this.AA_YES_CODE : this.AA_NO_CODE;
  }


  update(): void {
    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }
    this.isProcessing = true;
    this.travelService.editTravel(this.travelToEdited)
      .subscribe(travel => {
        this.isProcessing = false;
        this.save.emit(travel);
      }
      );
  }

  triggerDelete(): void { }

  private buildAutomaticAcceptanceOptions(): void {
    forkJoin([
      this.translateService.get('travel-propose.automatique-acceptance.yes'),
      this.translateService.get('travel-propose.automatique-acceptance.no')
    ]).subscribe((results: string[]) => {
      this.automaticAcceptanceOptions = [
        { code: this.AA_YES_CODE, libelle: results[0] },
        { code: this.AA_NO_CODE, libelle: results[1] }
      ];
    });
  }

}
