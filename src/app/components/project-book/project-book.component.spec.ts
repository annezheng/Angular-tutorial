import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBookComponent } from './project-book.component';

describe('ProjectBookComponent', () => {
  let component: ProjectBookComponent;
  let fixture: ComponentFixture<ProjectBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
