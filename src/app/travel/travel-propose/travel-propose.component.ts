import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { Helpers } from 'src/app/helpers';
import { ListItemModel } from 'src/app/shared/models';
import { BlasaUtils } from 'src/utils/blasa-utils';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';
import { TravelProposeStepCode, TRAVEL_PROPOSE_WORKFLOW } from './model/travel-propose-step.model';

@Component({
  selector: 'blasacar-travel-propose',
  templateUrl: './travel-propose.component.html',
  styleUrls: ['./travel-propose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelProposeComponent implements OnInit {

  travel = new Travel();

  form: FormGroup;
  formGroup: FormGroup;

  currentStep = TRAVEL_PROPOSE_WORKFLOW.head;
  travelProposeStepCodeEnum = TravelProposeStepCode;

  automatiqueAcceptanceOptions = [];

  constructor(
    private readonly translateService: TranslateService,
    private readonly travelService: TravelService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({});
    this.buildAutomatiqueAcceptanceOptions();
  }

  departureCityChanged(value: string): void {
    this.travel.departureCity = value;
  }

  arrivalCityChanged(value: string): void {
    this.travel.arrivalCity = value;
  }

  deparatureDateChanged(value: Date): void {
    this.travel.departureDate = value;
  }

  numberPlaceChanged(value: number): void {
    this.travel.numberPlace = value;
  }

  automatiqueAcceptanceChanged(value: boolean): void {
    this.travel.automatiqueAcceptance = value;
  }

  priceChanged(value: number): void {
    this.travel.price = value;
  }

  phoneNumberChanged(value: string): void {
    this.travel.phoneNumber = value;
  }

  nextStep(): void {
    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }

    if (BlasaUtils.isNullOrUndefined(this.currentStep.next)) {
      this.travelService.proposeTravel(this.travel)
        .subscribe();
    } else {
      this.currentStep = this.currentStep.next;
    }
  }

  previousStep(): void {
    if (!BlasaUtils.isNullOrUndefined(this.currentStep.previous)) {
      this.currentStep = this.currentStep.previous;
    }
  }

  private buildAutomatiqueAcceptanceOptions(): void {
    forkJoin([
      this.translateService.get('travel-propose.automatique-acceptance.yes'),
      this.translateService.get('travel-propose.automatique-acceptance.no')
    ]).subscribe((results: string[]) => {
      this.automatiqueAcceptanceOptions = [
        { code: true, libelle: results[0] },
        { code: false, libelle: results[1] }
      ];
    });
  }

}
