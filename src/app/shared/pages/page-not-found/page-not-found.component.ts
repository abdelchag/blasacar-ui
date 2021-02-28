import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styles: []
})
export class PageNotFoundComponent {

  constructor(
    private location: Location
  ) { }

  goBack() {
    this.location.back();
  }

}