import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { NotificationType } from 'src/app/constants';
import { ToastNotificationService } from 'src/app/core/services';
import { Helpers } from 'src/app/helpers';
import { AccountManagementProxyService } from 'src/app/shared/proxy-services/account-management.proxy.service';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { BlasaUtils } from 'src/utils/blasa-utils';
import { LoginModel } from '../../models/login.model';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'blasacar-connexion-member-form',
  templateUrl: './connexion-member-form.component.html',
  styleUrls: ['./connexion-member-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnexionMemberFormComponent implements OnInit {

  formGroup: FormGroup;
  user: UserModel;
  form: FormGroup;
  loginModel: LoginModel = new LoginModel();

  constructor(
    private readonly currentUserService: CurrentUserService,
    private readonly toastNotificationService: ToastNotificationService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly accountManagementProxy: AccountManagementProxyService,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({});

  }

  submit(): void {

    if (this.form.invalid) {
      Helpers.showErrors(this.form);
      return;
    }

    const loginModelToConnect = new LoginModel();
    Object.assign(loginModelToConnect, this.form.value);

    this.accountManagementProxy.loginMembre(loginModelToConnect)
      .pipe(
        mergeMap(externalUserResponse => {
          this.currentUserService.emitCurrentUser(externalUserResponse);
          this.toastNotificationService.notify({
            type: NotificationType.Success,
            message: 'toast-notifications.you-are-connected'
          });
          return this.activatedRoute.queryParams;
        })
      ).subscribe(params => {
        const originParam = !BlasaUtils.isNullOrUndefined(params['origin']) ? params['origin'] : '';
        this.router.navigate([`/${originParam}`]);
      });

  }

}
