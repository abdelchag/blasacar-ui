import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styles: []
})
export class PageLoaderComponent implements OnInit {

  _isLoading = false;
  get isLoading() {
    return this._isLoading;
  }

  @Input() set isLoading(value: boolean) {
    if (value) {
      window.scrollTo(0, 0);
    }
     this._isLoading = value;
  }

  ngOnInit() { }
}
