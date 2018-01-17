import {Directive, ElementRef, Renderer} from '@angular/core';

/**
 *  自定义文本高亮指令
 */
@Directive({
  selector: '[highlight]'
})
export class HighlightDirective{
  constructor(private el: ElementRef, private renderer: Renderer){
    renderer.setElementStyle(el.nativeElement, 'background-color', 'yellow');
    renderer.setElementStyle(el.nativeElement, 'border-radius', '5px');
    renderer.setElementStyle(el.nativeElement, 'padding', '5px');
  }
}
