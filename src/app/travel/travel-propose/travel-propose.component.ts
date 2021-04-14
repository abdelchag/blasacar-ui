import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { NotificationType } from 'src/app/constants';
import { ToastNotificationService } from 'src/app/core/services';
import { Helpers } from 'src/app/helpers';
import { ROUTING_PATH } from 'src/app/routing-constants';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { BlasaUtils } from 'src/utils/blasa-utils';
import { Travel } from '../model/travel.model';
import { TravelService } from '../service/travel.service';
import { TravelProposeStepCode, TRAVEL_PROPOSE_WORKFLOW } from './model/travel-propose-step.model';

@Component({
  selector: 'blasacar-travel-propose',
  templateUrl: './travel-propose.component.html',
  styleUrls: ['./travel-propose.component.scss']
})
export class TravelProposeComponent implements OnInit {

  travel = new Travel();

  form: FormGroup;
  formGroup: FormGroup;

  currentStep = TRAVEL_PROPOSE_WORKFLOW.head;
  travelProposeStepCodeEnum = TravelProposeStepCode;

  automaticAcceptanceOptions = [];
  readonly AA_YES_CODE = 'Y';
  readonly AA_NO_CODE = 'N';

  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService,
    private readonly currentUserService: CurrentUserService,
    private readonly toastNotificationService: ToastNotificationService,
    private readonly travelService: TravelService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({});
    this.travel.phoneNumber = this.currentUserService.currentUser.telephone;
    this.buildAutomaticAcceptanceOptions();
  }

  changeAutomaticAcceptance(code: string): void {
    this.travel.isAutomaticAcceptance = code === this.AA_YES_CODE;
  }

  getAutomaticAcceptance(): string {
    if (BlasaUtils.isNullOrUndefined(this.travel.isAutomaticAcceptance)) {
      return null;
    }
    return this.travel.isAutomaticAcceptance ? this.AA_YES_CODE : this.AA_NO_CODE;
  }

  nextStep(): void {
    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }

    if (BlasaUtils.isNullOrUndefined(this.currentStep.next)) {
      this.travelService.proposeTravel(this.travel)
        .subscribe(() => {
          this.router.navigate([`${ROUTING_PATH.TRAVEL}/${ROUTING_PATH.TRAVEL_LIST}`]);
          this.toastNotificationService.notify({
            type: NotificationType.Success,
            message: 'toast-notifications.travel.travel-proposed'
          });
        });

    } else {
      this.currentStep = this.currentStep.next;
    }
  }

  previousStep(): void {
    if (!BlasaUtils.isNullOrUndefined(this.currentStep.previous)) {
      this.currentStep = this.currentStep.previous;
    }
  }

  nextStepButtonLabel(): string {
    return !BlasaUtils.isNullOrUndefined(this.currentStep.next)
      ? 'travel-propose.next-step'
      : 'travel-propose.propose-travel';
  }

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
