import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'blasacar-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({});
  }

  submit(): void {}

}
