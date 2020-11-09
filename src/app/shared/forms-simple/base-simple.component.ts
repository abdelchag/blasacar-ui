import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blasacar-base-simple',
  templateUrl: './base-simple.component.html',
  styleUrls: ['./base-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
