import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LayoutStyle } from './layout-style.enum';

@Component({
  selector: 'app-layout-dialog',
  templateUrl: './layout-dialog.component.html',
  styles: []
})
export class LayoutDialogComponent implements OnInit {

  @Input() style: LayoutStyle;
  @Input() hideCloseIcon = false;
  @Output() closed = new EventEmitter<true>();

  styleDialog = 'popin-style1';
  constructor() { }

  ngOnInit() {
    if (this.style === LayoutStyle.success) {
      this.styleDialog = 'popin-style3';
    } else if (this.style === LayoutStyle.alert) {
      this.styleDialog = 'popin-style2';
    }
  }

}
