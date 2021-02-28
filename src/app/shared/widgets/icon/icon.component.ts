import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'blasacar-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

  @Input() klass: string;
  @Input() name: string;

  get src(): string {
    return this.name ? `assets/images/icons/${this.name}.svg` : null;
  }

}
