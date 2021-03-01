import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastNotificationService } from 'src/app/core/services';
import { Helpers } from 'src/app/helpers';
import { AccountManagementProxyService } from 'src/app/shared/proxy-services/account-management.proxy.service';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
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
    private toastNotificationService: ToastNotificationService,
    private readonly router: Router,
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
    console.log(loginModelToConnect);


    this.accountManagementProxy
    .loginMembre(loginModelToConnect)
    .pipe(
      finalize(() => console.log(loginModelToConnect))
    )
    .subscribe(
      externalUserResponse => {
        this.currentUserService.emitCurrentUser(externalUserResponse);
        this.toastNotificationService.notify({
          type: 'success',
          message: 'Bienvenue, vous étes connectés'
        });
        this.router.navigate(['/']);
      },
      erreur => this.toastNotificationService.notifyHttpError(erreur)
    );

  }

}
