import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptLifeCyclesComponent } from './compt-life-cycles.component';

describe('ComptLifeCyclesComponent', () => {
  let component: ComptLifeCyclesComponent;
  let fixture: ComponentFixture<ComptLifeCyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptLifeCyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptLifeCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
