import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  ActivatedRoute,
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { ToastNotificationModel } from './shared/models';
import { notificationType } from './constants';
import { ToastNotificationService } from './core/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavigationErreurDialogComponent } from './core/dialogs';

@Component({
  selector: 'blasacar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlasaCar';
  page: string;
  isLoading = false;
  initialNavigation = true;
  isSidebarLoaded = false;

  constructor(private translate: TranslateService, private route: ActivatedRoute,
    private router: Router,    private toastNotificationService: ToastNotificationService,private modalService: NgbModal,) {
    translate.addLangs(['fr']);
    translate.setDefaultLang('fr');

    this.router.events.subscribe((event: RouterEvent) => {

      this.navigationInterceptor(event);

    });

  }

  private navigationInterceptor(event: RouterEvent): void {

    if (this.page !== this.router.url) {
      this.page = this.router.url;
    }

    if (event instanceof NavigationStart) {
      if (!this.initialNavigation) {
        this.isLoading = true;
        this.isSidebarLoaded = false;
      }

      const toastNotification = new ToastNotificationModel();
      toastNotification.type = notificationType.Clear;
      this.toastNotificationService.notify(toastNotification);
    }

    if (event instanceof NavigationEnd) {
      this.stopNavigationLoader();
      this.showSidebar();
    }

    if (event instanceof NavigationCancel) {
      this.stopNavigationLoader();
    }

    if (event instanceof NavigationError) {
      this.stopNavigationLoader();

      const modalRef = this.modalService.open(NavigationErreurDialogComponent);
      modalRef.componentInstance.message = 'Une erreur s\'est produite';
    }
  }

  stopNavigationLoader(): void {
    this.initialNavigation = false;
    this.isLoading = false;
    this.isSidebarLoaded = true;
  }

  showSidebar() {

    // const root = this.activatedRoute.root;
    // this.sidebar = this.getSidebarWidgets(root);
    // this.isSidebarLoaded = true;
  }
}
