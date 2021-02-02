import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of, Subject } from 'rxjs';
import { catchError, delay, last, repeat, switchMap, takeWhile, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { parcoursEtats } from 'src/app/constants';
import { ParcoursModel } from 'src/app/shared/models';

import { SignatureDialogOptions } from './signature-dialog-options';
import { SignatureDialogResults } from './signature-dialog-results';
import { SignatureDialogStates } from './signature-dialog-states';
import { SignatureDialogComponent } from './signature-dialog/signature-dialog.component';

const POLL_DELAY = 5000;

@Injectable()
export class SignatureDialogService {

  private component: SignatureDialogComponent;
  private modalReference: NgbModalRef;
  private parcours: ParcoursModel;
  private result: Subject<SignatureDialogResults>;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  open(parcours$: Observable<ParcoursModel>, options?: SignatureDialogOptions) {

    this.openDialog(options);
    this.result = new Subject<SignatureDialogResults>();

    return parcours$
      .pipe(
        catchError(() => {
          this.component.state = SignatureDialogStates.ERROR;
          throw new Error('');
        }),
        tap((parcours) => {
          this.parcours = parcours;
          this.openTab();
          this.setState(parcours);
        }),
        switchMap((parcours) => this.poll(parcours)),
        switchMap(() => this.result)
      );

  }

  private openDialog(options: SignatureDialogOptions) {

    this.modalReference = this.modalService.open(SignatureDialogComponent, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg'
    });

    this.component = this.modalReference.componentInstance as SignatureDialogComponent;
    this.component.options = options;
    this.component.state = SignatureDialogStates.CREATING;
    this.component.openTab.pipe(tap(() => this.openTab())).subscribe();
    this.component.closeDialog.pipe(tap((result) => this.closeDialog(result))).subscribe();

  }

  private closeDialog(result: SignatureDialogResults) {
    this.modalReference.close();
    this.result.next(result);
    this.result.complete();
  }

  private checkSignature(parcours: ParcoursModel) {
    const url = `${environment.apiUrl}/signatures/${parcours.id}`;
    return this.http.get<ParcoursModel>(url);
  }

  private openTab() {
    if (this.parcours) {
      window.open(this.parcours.url);
    }
  }

  private poll(parcours: ParcoursModel) {

    return of(parcours)
      .pipe(
        delay(POLL_DELAY),
        switchMap((p) => this.checkSignature(p)),
        catchError(() => this.setError()),
        tap((p) => this.setState(p)),
        repeat(),
        takeWhile((p) => !!p, true),
        last()
      );

  }

  private setState(parcours: Partial<ParcoursModel>) {

    if (parcours) {

      switch (parcours.statutBase) {
        case parcoursEtats.EN_COURS:
          this.component.state = SignatureDialogStates.CREATED;
          break;
        case parcoursEtats.NotificationStarted:
          this.component.state = SignatureDialogStates.PROCESSING;
          break;
        case parcoursEtats.NotificationFailed:
          throw new Error();
        default:
          break;
      }

    } else {

      this.component.state = SignatureDialogStates.PROCESSED;

    }

  }

  setError() {
    this.component.state = SignatureDialogStates.ERROR;
    return of(null);
  }

}
