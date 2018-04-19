import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirCcRollover]'
})
export class DirCcRolloverDirective {
  @HostBinding('src') private image: string;

  @Input('appDirCcRollover') config: Array<string> = [
    'https://unsplash.it/200/300?image=201','','',''
  ];
  
  private imageIdx: number = 0;

  constructor() { }

  ngOnChanges(){
    this.image = this.config[0];
    this.imageIdx = 0;
  }

  @HostListener('mouseover') onMouseOver(){  
    this.imageIdx++;
    if (this.imageIdx === this.config.length){
      this.imageIdx = 0;
    }
    this.image = this.config[this.imageIdx];        
   }
  
}
