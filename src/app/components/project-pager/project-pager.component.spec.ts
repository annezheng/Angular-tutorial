import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPagerComponent } from './project-pager.component';

describe('ProjectPagerComponent', () => {
  let component: ProjectPagerComponent;
  let fixture: ComponentFixture<ProjectPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
