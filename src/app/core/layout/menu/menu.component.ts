import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { MenuItemModel } from 'src/app/shared/models';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'blasacar-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnDestroy {

  isGanEuro = false;
  menu: MenuItemModel[];
  private subcriptions = new Subscription();
  urlTableauDeBordEcli: string;
  isApporteur = false;

  isMenuDisabled = false;

  constructor(
    public menuService: MenuService,
  ) {

    this.subcriptions.add(this.menuService.isMenuDisabled$.subscribe(x => this.isMenuDisabled = x));


    this.subcriptions.add(this.menuService.menuItems$.subscribe(x => this.menu = x));

  }

  hasElements(sousMenu: MenuItemModel[]): boolean {
    return sousMenu.length > 0;
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }

  redirectToEcli(): void {
    window.location.href = this.urlTableauDeBordEcli;
  }

}
