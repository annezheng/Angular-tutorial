import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compt-carousel-item',
  templateUrl: './compt-carousel-item.component.html',
  styleUrls: ['./compt-carousel-item.component.css']
})
export class ComptCarouselItemComponent implements OnInit {
  active: boolean;
  constructor() { }

  ngOnInit() {
  }

}
