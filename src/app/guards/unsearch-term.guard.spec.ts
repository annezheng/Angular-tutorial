import { TestBed, async, inject } from '@angular/core/testing';

import { UnsearchTermGuard } from './unsearch-term.guard';

describe('UnsearchTermGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsearchTermGuard]
    });
  });

  it('should ...', inject([UnsearchTermGuard], (guard: UnsearchTermGuard) => {
    expect(guard).toBeTruthy();
  }));
});
