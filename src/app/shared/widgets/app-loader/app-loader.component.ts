import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blasacar-loader',
  templateUrl: './app-loader.component.html',
  styles: []
})
export class AppLoaderComponent implements OnInit {

  _isLoading = false;
  get isLoading(): boolean {
    return this._isLoading;
  }

  @Input() set isLoading(value: boolean) {
    if (value) {
      window.scrollTo(0, 0);
    }
    this._isLoading = value;
  }

  ngOnInit(): void { }
}
