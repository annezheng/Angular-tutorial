import { TestBed, inject } from '@angular/core/testing';

import { LibraryDataService } from './library-data.service';

describe('LibraryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryDataService]
    });
  });

  it('should be created', inject([LibraryDataService], (service: LibraryDataService) => {
    expect(service).toBeTruthy();
  }));
});
