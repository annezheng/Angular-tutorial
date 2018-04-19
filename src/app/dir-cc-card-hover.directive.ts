import { Directive, Input, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirCcCardHover]'
})
export class DirCcCardHoverDirective {
  @HostBinding('class.bg-warning') private isHovering: boolean;

  @Input('appDirCcCardHover') config: any = {
    querySelector: '.card-title',
    includes: ''
  };  

  constructor(private el: ElementRef, 
              private renderer: Renderer) {
    // el.nativeElement.style.backgroundColor = 'grey'; // won't work if already set it in bootstrap class such as "bg-light"

    // better use renderer since it is not limited to web browser
    // renderer.setElementStyle(el.nativeElement, 'font-family', 'cursive');
   }

  @HostListener('mouseover') onMouseOver(){    
    let titleEl = this.el.nativeElement.querySelector(this.config.querySelector);    
    
    console.log(titleEl.textContent);
    if (titleEl.textContent.includes(this.config.includes)){
      this.isHovering = true;
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'font-variant', 'small-caps');
      this.renderer.setElementStyle(titleEl, 'font-family', 'cursive'); 
    }   
   }

   @HostListener('mouseout') onMouseOut(){    
    let titleEl = this.el.nativeElement.querySelector(this.config.querySelector);
    
    if (titleEl.textContent.includes(this.config.includes)){
      this.isHovering = false;
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'font-variant', 'normal');
      this.renderer.setElementStyle(titleEl, 'font-family', 'initial');
    }
   }

}
