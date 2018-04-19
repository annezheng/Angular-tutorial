import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSearchFormComponent } from './reactive-search-form.component';

describe('ReactiveSearchFormComponent', () => {
  let component: ReactiveSearchFormComponent;
  let fixture: ComponentFixture<ReactiveSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
