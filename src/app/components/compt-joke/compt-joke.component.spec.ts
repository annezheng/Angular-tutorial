import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptJokeComponent } from './compt-joke.component';

describe('ComptJokeComponent', () => {
  let component: ComptJokeComponent;
  let fixture: ComponentFixture<ComptJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
