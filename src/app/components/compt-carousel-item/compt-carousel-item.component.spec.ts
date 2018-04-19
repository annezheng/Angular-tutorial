import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptCarouselItemComponent } from './compt-carousel-item.component';

describe('ComptCarouselItemComponent', () => {
  let component: ComptCarouselItemComponent;
  let fixture: ComponentFixture<ComptCarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptCarouselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
