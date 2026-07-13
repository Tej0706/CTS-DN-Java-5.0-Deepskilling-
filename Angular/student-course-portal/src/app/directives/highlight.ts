import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'lightyellow';
  }

}