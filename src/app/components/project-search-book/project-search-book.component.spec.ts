import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSearchBookComponent } from './project-search-book.component';

describe('ProjectSearchBookComponent', () => {
  let component: ProjectSearchBookComponent;
  let fixture: ComponentFixture<ProjectSearchBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSearchBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSearchBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
