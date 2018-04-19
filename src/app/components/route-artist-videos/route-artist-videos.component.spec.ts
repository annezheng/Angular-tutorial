import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteArtistVideosComponent } from './route-artist-videos.component';

describe('RouteArtistVideosComponent', () => {
  let component: RouteArtistVideosComponent;
  let fixture: ComponentFixture<RouteArtistVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteArtistVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteArtistVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
