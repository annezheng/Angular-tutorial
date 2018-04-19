import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsJokeListComponent } from './gs-joke-list.component';

describe('GsJokeListComponent', () => {
  let component: GsJokeListComponent;
  let fixture: ComponentFixture<GsJokeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsJokeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsJokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
