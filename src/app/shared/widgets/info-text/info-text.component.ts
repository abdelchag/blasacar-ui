import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoTextComponent {

  @Input() label: string;
  @Input() value: string;
  @Input() popoverContent: any;

}
