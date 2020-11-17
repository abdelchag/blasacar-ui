import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'blasacar-error-block',
  templateUrl: './error-block.component.html',
  styleUrls: ['./error-block.component.scss']
})
export class ErrorBlockComponent implements OnInit {

  @Input() errors: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
