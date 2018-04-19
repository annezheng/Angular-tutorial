import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteArtistComponent } from './route-artist.component';

describe('RouteArtistComponent', () => {
  let component: RouteArtistComponent;
  let fixture: ComponentFixture<RouteArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
