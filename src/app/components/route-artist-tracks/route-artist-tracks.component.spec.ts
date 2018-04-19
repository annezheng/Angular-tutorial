import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteArtistTracksComponent } from './route-artist-tracks.component';

describe('RouteArtistTracksComponent', () => {
  let component: RouteArtistTracksComponent;
  let fixture: ComponentFixture<RouteArtistTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteArtistTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteArtistTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
