import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiParentComponent } from './di-parent.component';

describe('DiParentComponent', () => {
  let component: DiParentComponent;
  let fixture: ComponentFixture<DiParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
