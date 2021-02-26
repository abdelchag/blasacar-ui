import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNotImplemented]'
})
export class NotImplementedDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  private _active = true;
  private hasChange = false;

  @Input('appNotImplemented')
  set active(val: any) {
    const active = val !== false;
    if (this._active !== active) {
      this.applyChange(active);
    }
  }

  protected _elementClass: string[] = [];

  @Input() toolTipNotImplemented: string;

  @Input('class')
  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }
  set elementClass(val: string) {
    this._elementClass = val.split(' ');
  }


  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (this._active) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  ngOnInit(): void {
    this.applyChange(this._active);
  }

  applyChange(val: boolean): void {
    this._active = val;
    if (this._active) {
      this._elementClass.push('fa');
      this._elementClass.push('fa-wrench');
      this.renderer.setAttribute(this.elRef.nativeElement, 'title', this.toolTipNotImplemented ? this.toolTipNotImplemented : 'Non implémenté');
      this.renderer.setAttribute(this.elRef.nativeElement, 'disabled', 'disabled');
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'repeating-linear-gradient(-45deg, grey, grey 10px,orange 10px, orange 20px)');
      this.hasChange = true;
    } else if (this.hasChange) {
      this._elementClass = this._elementClass.filter(c => c !== 'fa' && c !== 'fa-wrench');
      this.renderer.removeAttribute(this.elRef.nativeElement, 'title');
      this.renderer.removeStyle(this.elRef.nativeElement, 'background');
      this.hasChange = false;
    }
  }
}
