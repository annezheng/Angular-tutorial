import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiProviderComponent } from './di-provider.component';

describe('DiProviderComponent', () => {
  let component: DiProviderComponent;
  let fixture: ComponentFixture<DiProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
