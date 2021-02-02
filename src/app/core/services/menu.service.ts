import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { MenuItemModel } from 'src/app/shared/models';

@Injectable()
export class MenuService {

  constructor() {
    this.disableMenu(false);
  }

  private menuItems: Subject<MenuItemModel[]> = new Subject<MenuItemModel[]>();
  menuItems$: Observable<MenuItemModel[]> = this.menuItems.asObservable();

  isMenuDisabled: Subject<boolean> = new Subject<boolean>();

  isMenuDisabled$: Observable<boolean> = this.isMenuDisabled.asObservable();

  disableMenu(value: boolean): void {
    this.isMenuDisabled.next(value);
  }

  notify(value: MenuItemModel[]) {
    this.menuItems.next(value);
  }

}
