import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsJokeComponent } from './gs-joke.component';

describe('GsJokeComponent', () => {
  let component: GsJokeComponent;
  let fixture: ComponentFixture<GsJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
