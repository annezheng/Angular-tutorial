import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsJokeFormComponent } from './gs-joke-form.component';

describe('GsJokeFormComponent', () => {
  let component: GsJokeFormComponent;
  let fixture: ComponentFixture<GsJokeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsJokeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsJokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
