import { Directive, HostBinding, HostListener, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appProjectCardHover]'
})
export class ProjectCardHoverDirective {

  @HostBinding('class.hoverBorder') private isHovering: boolean;

  @HostListener('mouseover') onMouseOver(){
    this.isHovering = true;
  }
  @HostListener('mouseout') onMouseOut(){
    this.isHovering = false;
  }

  constructor(private el: ElementRef, 
    private renderer: Renderer) { }

}
