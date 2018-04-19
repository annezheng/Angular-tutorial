import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirRxjsFormComponent } from './dir-rxjs-form.component';

describe('DirRxjsFormComponent', () => {
  let component: DirRxjsFormComponent;
  let fixture: ComponentFixture<DirRxjsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirRxjsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirRxjsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
