import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {

  @Input() myColor: string;
  @Input() myFontSize: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { 
  }

  ngOnInit(): void {
    this.element.nativeElement.style.color = '#ff0000';
    this.renderer.setStyle(this.element.nativeElement, 'color', this.myColor);
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.myFontSize);
  }

}
