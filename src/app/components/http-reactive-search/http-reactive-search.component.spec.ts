import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpReactiveSearchComponent } from './http-reactive-search.component';

describe('HttpReactiveSearchComponent', () => {
  let component: HttpReactiveSearchComponent;
  let fixture: ComponentFixture<HttpReactiveSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpReactiveSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpReactiveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
