import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteArtistAlbumsComponent } from './route-artist-albums.component';

describe('RouteArtistAlbumsComponent', () => {
  let component: RouteArtistAlbumsComponent;
  let fixture: ComponentFixture<RouteArtistAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteArtistAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteArtistAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
