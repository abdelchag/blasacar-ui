import { Component, OnInit } from '@angular/core';

import { ParametrageService, ToastNotificationService } from 'src/app/core/services';
import { LienUtileModel } from 'src/app/shared/models';

@Component({
  selector: 'app-liens-utiles',
  templateUrl: './liens-utiles.component.html',
  styles: []
})
export class LiensUtilesComponent implements OnInit {

  isLoading = true;
  liensUtiles: LienUtileModel[];

  constructor(
    private parametrageService: ParametrageService,
    private toastNotificationService: ToastNotificationService
  ) { }

  ngOnInit() {

    this.parametrageService.getLiensUtiles()
      .subscribe(
        liensUtiles => this.liensUtiles = liensUtiles,
        error => this.toastNotificationService.notifyHttpError(error),
        () => this.isLoading = false
      );

  }

  getImageBase64(lien: LienUtileModel): string {
    return `data:${lien.mime};base64,${lien.logo}`;
  }
}
