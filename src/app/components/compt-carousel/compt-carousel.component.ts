import { 
  Component,
  ContentChildren, 
  QueryList, 
  AfterContentInit } from '@angular/core';
import { ComptCarouselItemComponent } from '../compt-carousel-item/compt-carousel-item.component';

@Component({
  selector: 'app-compt-carousel',
  templateUrl: './compt-carousel.component.html',
  styleUrls: ['./compt-carousel.component.css']
})
export class ComptCarouselComponent implements AfterContentInit {
  @ContentChildren(ComptCarouselItemComponent) carouselItemsList: QueryList<ComptCarouselItemComponent>;

  constructor() { }

  ngAfterContentInit() { 
    console.log(`ngAfterContentInit - CarouselContentChildren is ${this.carouselItemsList}`);
    let carouselItems = this.carouselItemsList.toArray();
    let count: number = 0;
    let max = carouselItems.length;
    setInterval(()=>{
      let i = count % max;
      carouselItems.forEach((item) => item.active = false);
      carouselItems[i].active = true;
      count += 1;
    }, 2000)
  }

}
