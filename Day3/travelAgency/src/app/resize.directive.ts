import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('class.img-thumbnail') showBorder = true;

  @HostListener('mouseover') onMouseEnter() {

    this.renderer.setStyle(this.element.nativeElement, "width", "300px");
    this.renderer.setStyle(this.element.nativeElement, "transition", "width 2s");
    this.showBorder = false;
  }

  @HostListener('mouseout') onMouseLeave() {

    this.renderer.setStyle(this.element.nativeElement, "width", "100px");
    this.renderer.setStyle(this.element.nativeElement, "transition", "width 2s");
    this.showBorder = true;
  }

}
