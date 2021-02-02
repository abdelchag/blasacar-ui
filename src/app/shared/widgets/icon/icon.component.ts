import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

  @Input() klass: string;
  @Input() name: string;

  get src() {
    return this.name ? `assets/images/icons/${this.name}.svg` : null;
  }

}
