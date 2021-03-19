import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { civilites, NotificationType } from 'src/app/constants';
import { ToastNotificationService } from 'src/app/core/services';
import { Helpers } from 'src/app/helpers';
import { ROUTING_PATH } from 'src/app/routing-constants';
import { ListItemModel } from 'src/app/shared/models';
import { AccountManagementProxyService } from 'src/app/shared/proxy-services/account-management.proxy.service';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { BlasaUtils } from 'src/utils/blasa-utils';
import { MemberStepCode, MEMBER_WORKFLOW } from '../../models/member-step.model';
import { UserModel } from '../../models/user.model';


@Component({
  selector: 'blasacar-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  formGroup: FormGroup;
  user: UserModel;
  step: number;
  form: FormGroup;
  civilites: ListItemModel[] = [];
  userToAdd: UserModel = new UserModel();
  labelBtn: string;
  isBirthDateValid = true;
  stepNomPrenom = false;
  stepBirthDate = false;
  stepEmail = true;
  stepTelephone = false;
  stepAdresse = false;
  stepGender = false;
  stepPassword = false;

  currentStep = MEMBER_WORKFLOW.head;
  memberStepCode = MemberStepCode;

  constructor(
    private readonly currentUserService: CurrentUserService,
    private toastNotificationService: ToastNotificationService,
    private readonly router: Router,
    private readonly accountManagementProxy: AccountManagementProxyService,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({});
    this.civilites = civilites;
    this.labelBtn = 'Suivant';
    this.step = 0;
  }

  nextStep(): void {
    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }

    if (BlasaUtils.isNullOrUndefined(this.currentStep.next)) {
      this.accountManagementProxy
        .saveMembre(this.userToAdd)
        .pipe(
          finalize(() => console.log(this.userToAdd))
        )
        .subscribe(
          externalUserResponse => {
            this.currentUserService.emitCurrentUser(externalUserResponse);
            this.toastNotificationService.notify({
              type: NotificationType.Success,
              message: 'toast-notifications.validated-inscription'
            });
            this.router.navigate([ROUTING_PATH.ROOT]);
          }
        );
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
      ? 'member.next-step'
      : 'member.confirm-registration';
  }

}
