// TODO Supprimer et utiliser <app-info-text>
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styles: []
})
export class TextDisplayComponent {

  @Input() value: any;
  @Input() label: string;
  @Input() popoverContent: string;

}
