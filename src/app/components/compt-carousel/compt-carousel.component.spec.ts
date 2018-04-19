import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptCarouselComponent } from './compt-carousel.component';

describe('ComptCarouselComponent', () => {
  let component: ComptCarouselComponent;
  let fixture: ComponentFixture<ComptCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
